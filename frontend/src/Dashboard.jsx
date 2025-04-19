import { createContext, useEffect, useState, useRef } from 'react';

// Create context for user data
const UserContext = createContext(null);
// Create context for theme
const ThemeContext = createContext(null);

// Generate random username
function generateUsername() {
  const adjectives = [
    'Agile', 'Ancient', 'Angry', 'Arctic', 'Brave', 'Bright', 'Broken', 'Busy', 'Calm', 'Charming',
    'Cheerful', 'Clever', 'Cold', 'Cool', 'Crazy', 'Creative', 'Crispy', 'Curious', 'Dark', 'Dizzy',
    'Dreamy', 'Drifty', 'Dusty', 'Eager', 'Electric', 'Epic', 'Faint', 'Fancy', 'Fierce', 'Fluffy',
    'Flying', 'Free', 'Funky', 'Gentle', 'Glitchy', 'Golden', 'Grumpy', 'Happy', 'Hollow', 'Icy',
    'Invisible', 'Jumpy', 'Kind', 'Lazy', 'Loud', 'Lucky', 'Magic', 'Massive', 'Melty', 'Mini',
    'Modern', 'Mysterious', 'Neon', 'Nimble', 'Odd', 'Old', 'Pixel', 'Polite', 'Primal', 'Proud',
    'Quick', 'Quiet', 'Radiant', 'Rapid', 'Rare', 'Rebel', 'Retro', 'Rough', 'Royal', 'Rusty',
    'Savage', 'Shady', 'Sharp', 'Shiny', 'Silent', 'Simple', 'Sleepy', 'Smart', 'Sneaky', 'Soft',
    'Solar', 'Spicy', 'Speedy', 'Spooky', 'Static', 'Stealthy', 'Stormy', 'Strange', 'Strong',
    'Stubborn', 'Sweet', 'Tiny', 'Tough', 'Toxic', 'Tricky', 'Vast', 'Velvet', 'Wild', 'Witty', 'Zany'
  ];

  const nouns = [
    'Alien', 'Angel', 'Ant', 'Ape', 'Archer', 'Bandit', 'Bat', 'Bear', 'Beast', 'Bee', 'Blade',
    'Blaze', 'Bot', 'Buffalo', 'Bug', 'Cat', 'Centaur', 'Chameleon', 'Cheetah', 'Claw', 'Cobra',
    'Crab', 'Cricket', 'Crow', 'Cyclops', 'Dagger', 'Demon', 'Dino', 'Dolphin', 'Dragon', 'Druid',
    'Duck', 'Eagle', 'Elf', 'Falcon', 'Fang', 'Firefly', 'Fish', 'Flame', 'Fox', 'Frost', 'Ghost',
    'Ghoul', 'Giant', 'Goblin', 'Golem', 'Griffin', 'Hawk', 'Hedgehog', 'Hunter', 'Hyena', 'Jaguar',
    'Jellyfish', 'Knight', 'Kraken', 'Leopard', 'Lion', 'Lizard', 'Lynx', 'Mage', 'Mermaid', 'Mole',
    'Monkey', 'Moose', 'Moth', 'Ninja', 'Ogre', 'Otter', 'Owl', 'Panther', 'Pegasus', 'Penguin',
    'Phoenix', 'Pirate', 'Puma', 'Rabbit', 'Raccoon', 'Raptor', 'Rat', 'Reaper', 'Rhino', 'Robot',
    'Scorpion', 'Shadow', 'Shark', 'Slime', 'Snake', 'Sorcerer', 'Spider', 'Squirrel', 'Tiger',
    'Troll', 'Turtle', 'Vampire', 'Viper', 'Vixen', 'Walrus', 'Warlock', 'Whale', 'Witch', 'Wolf',
    'Wolverine', 'Wombat', 'Wraith', 'Yeti', 'Zombie'
  ];

  const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNumber = Math.floor(1000 + Math.random() * 9000); // 4-digit number

  return `${randomAdj}${randomNoun}${randomNumber}`;
}

// Mock data for friends and chats
const mockFriends = [
  { id: 1, username: 'GlitchyWolf5421', status: 'online', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UufSVXPlvEkMrAUtL0WV_-UZ2cGFJM_9ag&s' },
  { id: 2, username: 'NeonFox7834', status: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7p9iNDJijXhf3GQOILnoLwdt1Ua-LqW-FXfSC8I6sQ0EQZSdJRmiZgcqNuhZspLcSNb4&usqp=CAU' },
  { id: 3, username: 'ElectricPanther2398', status: 'online', avatar: 'https://rare-gallery.com/thumbs/1194476-anime-girls-THE-The-Idolmaster-Shiny-Colors-Mamimi-Tanaka.jpg' },
  { id: 4, username: 'FrostyOwl1245', status: 'away', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_NQygj0JLUYELEZqENTXXVusSNFYwXgnA5Q&s' },
  { id: 5, username: 'SavageTiger6792', status: 'online', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxOAN7JQOGRLkYXHet-8npdCApWZhfiLBzA&s' },
];

const mockMessages = [
  { id: 1, senderId: 1, content: "Hey! How's it going?", timestamp: "10:30 AM" },
  { id: 2, senderId: "me", content: "Not bad, just checking out this new chat app", timestamp: "10:32 AM" },
  { id: 3, senderId: 1, content: "Cool! I've been using it for a week. The random matching feature is pretty fun.", timestamp: "10:33 AM" },
  { id: 4, senderId: "me", content: "I haven't tried that yet. Do you meet interesting people?", timestamp: "10:35 AM" },
  { id: 5, senderId: 1, content: "Yeah, mostly. There are some strange ones though 😂", timestamp: "10:36 AM" },
];

// Available themes
const themes = {
  dark: {
    background: '#121212',
    sidebarBg: '#1E1E1E',
    primary: '#ffffff',
    secondary: 'rgb(188, 110, 237)',
    cardBg: '#2D2D2D',
    inputBg: '#333333',
    hoverBg: '#333333',
    borderColor: '#3F3F3F',
    shadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    success: '#4CAF50',
    danger: '#F44336',
    warning: '#FFC107',
    info: '#2196F3',
  },
  purple: {
    background: '#0F0A1E',
    sidebarBg: '#1A1435',
    primary: '#ffffff',
    secondary: 'rgb(188, 110, 237)',
    cardBg: '#251B3F',
    inputBg: '#2F2447',
    hoverBg: '#342952',
    borderColor: '#3F3559',
    shadow: '0 4px 12px rgba(0, 0, 0, 0.6)',
    success: '#4CAF50',
    danger: '#F44336',
    warning: '#FFC107',
    info: '#2196F3',
  }
};

function Dashboard() {
  // States
  const [user, setUser] = useState({ id: null, username: null });
  const [activeTab, setActiveTab] = useState('randomChat');
  const [friends, setFriends] = useState(mockFriends);
  const [messages, setMessages] = useState(mockMessages);
  const [messageInput, setMessageInput] = useState('');
  const [theme, setTheme] = useState('dark');
  const [showProfileSetup, setShowProfileSetup] = useState(true);
  const [profileData, setProfileData] = useState({
    gender: '',
    interests: [],
    age: '',
    location: '',
    bio: '',
  });
  const [onlineCount, setOnlineCount] = useState(1253);
  const [matchingStatus, setMatchingStatus] = useState('idle'); // idle, searching, matched
  const [notification, setNotification] = useState(null);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const messagesEndRef = useRef(null);
  const currentTheme = themes[theme];

  // Simulated emojis for the emoji picker
  const emojis = ['😀', '😂', '😍', '🤔', '😎', '🥳', '😢', '❤️', '👍', '🔥', '✨', '🎉'];

  // Effect to initialize user
  useEffect(() => {
    let id = localStorage.getItem('userId');
    let username = localStorage.getItem('username');
    if (!id) {
      id = Math.floor(Math.random() * 1000000);
      localStorage.setItem("userId", id);
    }
    
    if (!username) {
      username = generateUsername();
      localStorage.setItem("username", username);
    }

    setUser({ id: id, username });
    
    // Simulate online count changes
    const onlineInterval = setInterval(() => {
      setOnlineCount(prevCount => prevCount + Math.floor(Math.random() * 5) - 2);
    }, 5000);

    return () => clearInterval(onlineInterval);
  }, []);

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Handle message send
  const sendMessage = () => {
    if (messageInput.trim() === '') return;
    
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        senderId: 'me',
        content: messageInput,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    
    setMessageInput('');
    
    // Simulate response after delay
    setTimeout(() => {
      const responseMessages = [
        "That's interesting! Tell me more.",
        "I see what you mean. So what do you think about that?",
        "Cool! I've been thinking about that too recently.",
        "Haha, that's funny! 😄",
        "Really? I never thought of it that way before."
      ];
      
      setMessages(prevMessages => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          senderId: selectedFriend ? selectedFriend.id : 1,
          content: responseMessages[Math.floor(Math.random() * responseMessages.length)],
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1500);
  };

  // Start random chat matching
  const startMatching = () => {
    if (showProfileSetup) {
      setNotification({
        type: 'warning',
        message: 'Please complete your profile setup first!'
      });
      return;
    }
    
    setMatchingStatus('searching');
    
    // Simulate finding a match after 2-4 seconds
    setTimeout(() => {
      setMatchingStatus('matched');
      setNotification({
        type: 'success',
        message: 'You matched with a new person! Say hello!'
      });
      
      // Clear previous messages
      setMessages([
        {
          id: 1,
          senderId: 1,
          content: "Hi there! I'm new here. How are you doing today?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 2000 + Math.random() * 2000);
  };

  // Disconnect from current chat
  const disconnectChat = () => {
    setMatchingStatus('idle');
    setMessages([]);
    setNotification({
      type: 'info',
      message: 'Disconnected from chat'
    });
  };

  // Submit profile data
  const submitProfile = () => {
    if (!profileData.gender || profileData.interests.length === 0) {
      setNotification({
        type: 'warning',
        message: 'Please fill in all required fields'
      });
      return;
    }
    
    setShowProfileSetup(false);
    setNotification({
      type: 'success',
      message: 'Profile updated successfully!'
    });
  };

  // Add interest tag
  const addInterest = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      setProfileData({
        ...profileData,
        interests: [...profileData.interests, e.target.value.trim()]
      });
      e.target.value = '';
    }
  };

  // Remove interest tag
  const removeInterest = (index) => {
    setProfileData({
      ...profileData,
      interests: profileData.interests.filter((_, i) => i !== index)
    });
  };

  // Handle emoji selection
  const addEmoji = (emoji) => {
    setMessageInput(messageInput + emoji);
    setShowEmojiPicker(false);
  };
  
  // Clear notification after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  if (!user.id || !user.username) return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      background: currentTheme.background,
      color: currentTheme.primary 
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>ChatBlink</div>
        <div style={{ 
          width: '50px', 
          height: '50px', 
          border: `3px solid ${currentTheme.secondary}`,
          borderTopColor: 'transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentTheme }}>
      <UserContext.Provider value={{ user, setUser }}>
        <div style={{ 
          display: 'flex', 
          height: '100vh', 
          background: currentTheme.background,
          color: currentTheme.primary,
          fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        }}>
          {/* Left Sidebar */}
          <div style={{ 
            width: '280px', 
            height: '100%', 
            background: currentTheme.sidebarBg,
            display: 'flex',
            flexDirection: 'column',
            borderRight: `1px solid ${currentTheme.borderColor}`
          }}>
            {/* Logo and Site Name */}
            <div style={{ 
              padding: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              borderBottom: `1px solid ${currentTheme.borderColor}`
            }}>
              <img
                src="https://cdn.prod.website-files.com/64e6eacd2c162c96bf6c6af9/64e6eacd2c162c96bf6c6b17_tgrs_logo_orange.svg"
                alt="ChatBlink Logo"
                style={{ height: '30px', marginRight: '10px' }}
              />
              <h2 style={{ 
                margin: 0, 
                fontSize: '24px', 
                fontWeight: '600',
                background: `linear-gradient(90deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>ChatBlink</h2>
            </div>

            {/* Main Navigation */}
            <div style={{ padding: '15px' }}>
              <div style={{ fontSize: '12px', color: '#888', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                CHAT OPTIONS
              </div>
              
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: '8px',
                marginBottom: '20px'
              }}>
                <button 
                  style={{ 
                    background: activeTab === 'randomChat' ? currentTheme.secondary : 'transparent',
                    color: activeTab === 'randomChat' ? '#fff' : currentTheme.primary,
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: activeTab === 'randomChat' ? '600' : '400',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => setActiveTab('randomChat')}
                >
                  <span style={{ fontSize: '18px' }}>🔄</span>
                  Random Chat
                  <span style={{ 
                    marginLeft: 'auto',
                    background: '#1A1A1A',
                    color: '#fff',
                    padding: '2px 8px',
                    fontSize: '12px',
                    borderRadius: '12px'
                  }}>{onlineCount}</span>
                </button>
                
                <button 
                  style={{ 
                    background: activeTab === 'friendsList' ? currentTheme.secondary : 'transparent',
                    color: activeTab === 'friendsList' ? '#fff' : currentTheme.primary,
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: activeTab === 'friendsList' ? '600' : '400',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => setActiveTab('friendsList')}
                >
                  <span style={{ fontSize: '18px' }}>👥</span>
                  Friends List
                  <span style={{ 
                    marginLeft: 'auto',
                    background: currentTheme.success,
                    color: '#fff',
                    padding: '2px 8px',
                    fontSize: '12px',
                    borderRadius: '12px'
                  }}>{friends.filter(f => f.status === 'online').length}</span>
                </button>
                
                <button 
                  style={{ 
                    background: activeTab === 'directMessages' ? currentTheme.secondary : 'transparent',
                    color: activeTab === 'directMessages' ? '#fff' : currentTheme.primary,
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: activeTab === 'directMessages' ? '600' : '400',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => setActiveTab('directMessages')}
                >
                  <span style={{ fontSize: '18px' }}>💬</span>
                  Direct Messages
                </button>
              </div>
            </div>

            {/* Friends List (when active) */}
            {activeTab === 'friendsList' && (
              <div style={{ 
                padding: '0 15px', 
                overflow: 'auto',
                flex: 1
              }}>
                <div style={{ fontSize: '12px', color: '#888', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  ONLINE FRIENDS
                </div>
                
                {friends.filter(f => f.status === 'online').map(friend => (
                  <div 
                    key={friend.id}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      padding: '10px',
                      borderRadius: '8px',
                      marginBottom: '5px',
                      cursor: 'pointer',
                      background: selectedFriend?.id === friend.id ? currentTheme.hoverBg : 'transparent',
                      transition: 'background 0.2s ease'
                    }}
                    onClick={() => {
                      setSelectedFriend(friend);
                      setActiveTab('directMessages');
                    }}
                  >
                    <div style={{ position: 'relative', marginRight: '10px' }}>
                      <img 
                        src={friend.avatar} 
                        alt={friend.username}
                        style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%',
                          border: `2px solid ${currentTheme.secondary}`
                        }}
                      />
                      <div style={{ 
                        width: '12px', 
                        height: '12px', 
                        borderRadius: '50%', 
                        background: friend.status === 'online' ? currentTheme.success : 
                                  friend.status === 'away' ? currentTheme.warning : '#888',
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        border: `2px solid ${currentTheme.sidebarBg}`
                      }}></div>
                    </div>
                    <div>
                      <div style={{ fontWeight: '500' }}>{friend.username}</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>
                        {friend.status === 'online' ? 'Online now' : 
                         friend.status === 'away' ? 'Away' : 'Offline'}
                      </div>
                    </div>
                  </div>
                ))}
                
                <div style={{ fontSize: '12px', color: '#888', margin: '15px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  OFFLINE FRIENDS
                </div>
                
                {friends.filter(f => f.status !== 'online').map(friend => (
                  <div 
                    key={friend.id}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      padding: '10px',
                      borderRadius: '8px',
                      marginBottom: '5px',
                      cursor: 'pointer',
                      opacity: 0.6,
                      transition: 'background 0.2s ease'
                    }}
                    onClick={() => {
                      setSelectedFriend(friend);
                      setActiveTab('directMessages');
                    }}
                  >
                    <div style={{ position: 'relative', marginRight: '10px' }}>
                      <img 
                        src={friend.avatar} 
                        alt={friend.username}
                        style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%',
                          filter: 'grayscale(1)'
                        }}
                      />
                      <div style={{ 
                        width: '12px', 
                        height: '12px', 
                        borderRadius: '50%', 
                        background: '#888',
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        border: `2px solid ${currentTheme.sidebarBg}`
                      }}></div>
                    </div>
                    <div>
                      <div style={{ fontWeight: '500' }}>{friend.username}</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>Last seen 2h ago</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Account Section */}
            <div style={{ 
              padding: '15px',
              borderTop: `1px solid ${currentTheme.borderColor}`,
              marginTop: 'auto'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '10px'
              }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: currentTheme.secondary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '10px',
                  fontSize: '18px'
                }}>
                  {user.username.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: '600' }}>{user.username}</div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: currentTheme.success,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span style={{ 
                      width: '8px', 
                      height: '8px', 
                      borderRadius: '50%', 
                      background: currentTheme.success,
                      display: 'inline-block'
                    }}></span>
                    Online
                  </div>
                </div>
              </div>
              
              <button
                style={{ 
                  width: '100%',
                  padding: '10px',
                  background: currentTheme.inputBg,
                  color: currentTheme.primary,
                  border: 'none',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease'
                }}
                onClick={() => setShowSettings(!showSettings)}
              >
                <span style={{ fontSize: '16px' }}>⚙️</span>
                Settings
              </button>
            </div>
          </div>

          {/* Right Chat Area */}
          <div style={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden'
          }}>
            {/* Notification Banner */}
            {notification && (
              <div style={{ 
                padding: '10px 20px',
                background: notification.type === 'success' ? currentTheme.success :
                           notification.type === 'warning' ? currentTheme.warning :
                           notification.type === 'error' ? currentTheme.danger : 
                           currentTheme.info,
                color: '#fff',
                fontSize: '14px',
                textAlign: 'center',
                animation: 'fadeIn 0.3s ease'
              }}>
                {notification.message}
              </div>
            )}

            {/* Chat Header */}
            <div style={{ 
              padding: '15px 20px',
              borderBottom: `1px solid ${currentTheme.borderColor}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {activeTab === 'randomChat' ? (
                  <>
                    <span style={{ fontSize: '24px', marginRight: '10px' }}>🔄</span>
                    <div>
                      <div style={{ fontWeight: '600' }}>Random Chat</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>
                        {matchingStatus === 'idle' && 'Start a new conversation'}
                        {matchingStatus === 'searching' && 'Looking for someone to chat with...'}
                        {matchingStatus === 'matched' && 'You\'re now chatting with a stranger'}
                      </div>
                    </div>
                  </>
                ) : selectedFriend ? (
                  <>
                    <div style={{ position: 'relative', marginRight: '10px' }}>
                      <img 
                        src={selectedFriend.avatar} 
                        alt={selectedFriend.username}
                        style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%',
                          border: `2px solid ${currentTheme.secondary}`
                        }}
                      />
                      <div style={{ 
                        width: '12px', 
                        height: '12px', 
                        borderRadius: '50%', 
                        background: selectedFriend.status === 'online' ? currentTheme.success : 
                                  selectedFriend.status === 'away' ? currentTheme.warning : '#888',
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        border: `2px solid ${currentTheme.background}`
                      }}></div>
                    </div>
                    <div>
                      <div style={{ fontWeight: '600' }}>{selectedFriend.username}</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>
                        {selectedFriend.status === 'online' ? 'Online now' : 
                         selectedFriend.status === 'away' ? 'Away' : 'Offline'}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <span style={{ fontSize: '24px', marginRight: '10px' }}>💬</span>
                    <div>
                      <div style={{ fontWeight: '600' }}>Direct Messages</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>Select a friend to chat with</div>
                    </div>
                  </>
                )}
              </div>
              
              {activeTab === 'randomChat' && (
                <div>
                  {matchingStatus === 'idle' && (
                    <button
                      style={{ 
                        padding: '8px 16px',
                        background: currentTheme.secondary,
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '500'
                      }}
                      onClick={startMatching}
                    >
                      Start Chatting
                    </button>
                  )}
                  {matchingStatus === 'searching' && (
                    <button
                      style={{ 
                        padding: '8px 16px',
                        background: currentTheme.danger,
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '500'
                      }}
                      onClick={() => setMatchingStatus('idle')}
                    >
                      Cancel
                    </button>
                  )}
                  {matchingStatus === 'matched' && (
                    <button
                      style={{ 
                        padding: '8px 16px',
                        background: currentTheme.danger,
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '500'
                      }}
                      onClick={disconnectChat}
                    >
                      Disconnect
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Main Content Area */}
            <div style={{ flex: 1, overflow: 'auto', padding: '20px' }}>
              {/* Profile Setup */}
              {showProfileSetup ? (
                <div style={{ 
                  background: currentTheme.cardBg,
                  borderRadius: '12px',
                  padding: '25px',
                  maxWidth: '600px',
                  margin: '0 auto',
                  boxShadow: currentTheme.shadow
                }}>
                  <h2 style={{ marginTop: '0', color: currentTheme.primary }}>Complete Your Profile</h2>
                  <p style={{ color: '#888', marginBottom: '25px' }}>Tell us about yourself to get better matches</p>
                  
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Gender:</label>
                    <select 
                      style={{ 
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: 'none',
                        background: currentTheme.inputBg,
                        color: currentTheme.primary
                      }}
                      value={profileData.gender}
                      onChange={(e) => setProfileData({...profileData, gender: e.target.value})}
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-binary</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                  
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Interests:</label>
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '8px',
                      marginBottom: '10px'
                    }}>
                      {profileData.interests.map((interest, index) => (
                        <div key={index} style={{ 
                          background: currentTheme.secondary,
                          color: '#fff',
                          padding: '5px 10px',
                          borderRadius: '16px',
                          fontSize: '14px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}>
                          {interest}
                          <span 
                            style={{ cursor: 'pointer', fontSize: '16px' }}
                            onClick={() => removeInterest(index)}
                          >×</span>
                        </div>
                      ))}
                    </div>
                    <input
                      type="text"
                      placeholder="Type and press Enter to add interests..."
                      style={{ 
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: 'none',
                        background: currentTheme.inputBg,
                        color: currentTheme.primary
                      }}
                      onKeyDown={addInterest}
                    />
                  </div>
                  
                  <button
                    style={{ 
                      padding: '12px 24px',
                      background: currentTheme.secondary,
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: '500',
                      fontSize: '16px',
                      width: '100%'
                    }}
                    onClick={submitProfile}
                  >
                    Start Chatting
                  </button>
                </div>
              ) : (
                <div style={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  {/* Chat Messages */}
                  <div style={{ flex: 1 }}>
                    {messages.length === 0 ? (
                      <div style={{ 
                        height: '100%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexDirection: 'column',
                        color: '#888',
                        textAlign: 'center'
                      }}>
                        <span style={{ fontSize: '48px', marginBottom: '20px' }}>💬</span>
                        <p>No messages yet. Start chatting!</p>
                      </div>
                    ) : (
                      <div>
                        {messages.map((message) => (
                          <div 
                            key={message.id} 
                            style={{ 
                              display: 'flex',
                              justifyContent: message.senderId === 'me' ? 'flex-end' : 'flex-start',
                              marginBottom: '15px'
                            }}
                          >
                            <div style={{ 
                              maxWidth: '70%',
                              background: message.senderId === 'me' ? currentTheme.secondary : currentTheme.cardBg,
                              color: message.senderId === 'me' ? '#fff' : currentTheme.primary,
                              padding: '12px 16px',
                              borderRadius: '18px',
                              borderBottomRightRadius: message.senderId === 'me' ? '5px' : '18px',
                              borderBottomLeftRadius: message.senderId === 'me' ? '18px' : '5px',
                              boxShadow: currentTheme.shadow
                            }}>
                              <div style={{ marginBottom: '5px' }}>{message.content}</div>
                              <div style={{ 
                                fontSize: '11px', 
                                opacity: 0.7,
                                textAlign: 'right',
                              }}>{message.timestamp}</div>
                            </div>
                          </div>
                        ))}
                        <div ref={messagesEndRef} />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Message Input Area (visible when profile is completed) */}
            {!showProfileSetup && (
              <div style={{ 
                padding: '15px 20px',
                borderTop: `1px solid ${currentTheme.borderColor}`,
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <button
                  style={{ 
                    background: 'transparent',
                    border: 'none',
                    color: currentTheme.primary,
                    fontSize: '20px',
                    cursor: 'pointer'
                  }}
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  😊
                </button>
                
                {/* Emoji Picker */}
                {showEmojiPicker && (
                  <div style={{ 
                    position: 'absolute',
                    bottom: '70px',
                    left: '300px',
                    background: currentTheme.cardBg,
                    padding: '10px',
                    borderRadius: '8px',
                    boxShadow: currentTheme.shadow,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gap: '5px'
                  }}>
                    {emojis.map((emoji, index) => (
                      <button
                        key={index}
                        style={{ 
                          background: 'transparent',
                          border: 'none',
                          fontSize: '20px',
                          cursor: 'pointer',
                          padding: '5px'
                        }}
                        onClick={() => addEmoji(emoji)}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}
                
                <input
                  type="text"
                  placeholder="Type your message..."
                  style={{ 
                    flex: 1,
                    padding: '12px 16px',
                    borderRadius: '24px',
                    border: 'none',
                    background: currentTheme.inputBg,
                    color: currentTheme.primary
                  }}
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                />
                
                <button
                  style={{ 
                    background: currentTheme.secondary,
                    border: 'none',
                    color: '#fff',
                    padding: '12px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '42px',
                    height: '42px'
                  }}
                  onClick={sendMessage}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            )}
            
            {/* Settings Modal */}
            {showSettings && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100
              }}>
                <div style={{
                  background: currentTheme.cardBg,
                  borderRadius: '12px',
                  padding: '25px',
                  width: '400px',
                  boxShadow: currentTheme.shadow
                }}>
                  <h2 style={{ marginTop: 0 }}>Settings</h2>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Theme:</label>
                    <select 
                      style={{ 
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: 'none',
                        background: currentTheme.inputBg,
                        color: currentTheme.primary
                      }}
                      value={theme}
                      onChange={(e) => setTheme(e.target.value)}
                    >
                      <option value="dark">Dark</option>
                      <option value="purple">Purple</option>
                    </select>
                  </div>
                  <button
                    style={{ 
                      padding: '12px 24px',
                      background: currentTheme.danger,
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: '500',
                      width: '100%',
                      marginTop: '10px'
                    }}
                    onClick={() => setShowSettings(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default Dashboard;