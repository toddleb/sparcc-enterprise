import React, { useState } from 'react';
import { Toaster } from 'sonner';
import EnterprisePlatform from './core/EnterprisePlatform';

function App() {
  return (
    <>
      <EnterprisePlatform />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
