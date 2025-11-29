import React, { useState, useEffect, useRef } from 'react';
import { db } from '../config/firebase.js';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, limit } from 'firebase/firestore';
import { IoMdChatbubbles, IoMdSend, IoMdClose } from "react-icons/io";
import '../css/liveChat.css';

const LiveChat = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const dummyScrollRef = useRef(); // Otomatik scroll için

  // Mesajları çekme (Realtime Listener)
  useEffect(() => {
    if (!isOpen) return; // Chat kapalıysa veri çekme

    const messagesRef = collection(db, "messages");
    // Son 50 mesajı tarihe göre sırala
    const q = query(messagesRef, orderBy("createdAt"), limit(50));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = [];
      snapshot.forEach((doc) => {
        msgs.push({ ...doc.data(), id: doc.id });
      });
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [isOpen]);

  // Yeni mesaj geldiğinde en aşağı kaydır
  useEffect(() => {
    dummyScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "" || !currentUser) return;

    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        createdAt: serverTimestamp(),
        uid: currentUser.uid,
        displayName: currentUser.displayName || currentUser.email || "Anonim",
        photoURL: currentUser.photoURL || null
      });
      setNewMessage("");
    } catch (error) {
      console.error("Mesaj gönderilemedi:", error);
    }
  };

  return (
    <div className="chat-widget">
      {/* Sohbet Penceresi */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Student Academy Sohbet</span>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <IoMdClose />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`message ${msg.uid === currentUser?.uid ? 'sent' : 'received'}`}
              >
                {msg.uid !== currentUser?.uid && (
                   <span className="message-sender">{msg.displayName}</span>
                )}
                <p style={{margin: 0}}>{msg.text}</p>
              </div>
            ))}
            <div ref={dummyScrollRef}></div>
          </div>

          <form className="chat-input-area" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="chat-input"
              placeholder={currentUser ? "Mesaj yaz..." : "Giriş yapmalısınız"}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              disabled={!currentUser}
            />
            <button type="submit" className="send-btn" disabled={!currentUser || !newMessage.trim()}>
              <IoMdSend />
            </button>
          </form>
        </div>
      )}

      {/* Yuvarlak Açma Butonu */}
      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoMdClose size={30} /> : <IoMdChatbubbles size={30} />}
      </button>
    </div>
  );
};

export default LiveChat;