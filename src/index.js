import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import HOME_FRAME from './home_page';
import DATA_FRAME from './user_base_data';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

import TENSOR_AI from './tensor_ai';
import LAYOUT from './pages/layout';
import CHAT from './pages/chat';
import FRIENDS from './pages/friends';
import HOME from './pages/home';
import RECORD from './pages/record';

Amplify.configure(awsconfig);

export default function APP() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LAYOUT />}>
          <Route index element={<HOME />} />
          <Route path="record" element={<RECORD />} />
          <Route path="chat" element={<CHAT />} />
          <Route path="friends" element={<FRIENDS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<APP />);