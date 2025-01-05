import React from 'react';
import HiringForm from './components/HiringForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-gray-600">
              We're looking for talented individuals to help us shape the future.
              Fill out the form below to get started on your journey with us.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <HiringForm />
          </div>

          <footer className="mt-12 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;