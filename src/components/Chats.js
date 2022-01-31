import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContexts';
//import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';

const Chats = () => {
   const history = useHistory();
   const { user } = useAuth();
   const [loading, setLoading] = useState(true);

   console.log(user);
    
   const handleLogout = async () => {
       await auth.signOut();
   
       history.push('/'); 
   }

   const getFile = async (url) => {
       const response = await fetch(url);
       const data = await response.blob();
       return new File([data], "userPhoto.jpg", { type: 'image/jpeg' })
   } 

   useEffect(() => {
       if(!user) {
           history.push('/');

           return;
       }

       axios.get('https://api.chatengine.io/users/me', {
           headers:{
               "project-id": "7b6169fb-cb6f-4e87-818f-da38267c9126",
               "user-name": user.email,
               "user-secret": user.uid,
           }
       })
       .then(() => {
           setLoading(false);
       })
       .catch(() => {
           let formdata = new FormData();
           formdata.append('email', user.email);
           formdata.append('username', user.email);
           formdata.append('secret', user.uid);
       
           getFile(user.photoURL)
           .then((avatar) => {
               formdata.append('avatar', avatar, avatar.name)
               axios.post('https://api.chatengine.io/users',
               formdata,
               { headers: { "private-key": "e5e0a992-5c37-43f8-bc2a-dcfb1773ca39"}
           })
           .then(() => setLoading(false))
           .catch((error) => console.log(error))
           })
       })
   }, [user, history]);
    
if(!user || loading) return 'Loading...';

   return (
        <div className='chats-page'>
          <div className='nav-bar'>
          <div className='logo-tab'>
               youvchat
          </div>
          <div onClick={handleLogout} className='logout-tab'>
              Logout
          </div>
          </div>

          <ChatEngine
              height="calc(100vh - 66px)"
              projectID= "7b6169fb-cb6f-4e87-818f-da38267c9126"
              userName={user.email}
              userSecret={user.uid}
          />
        </div>
    );
}

export default Chats;