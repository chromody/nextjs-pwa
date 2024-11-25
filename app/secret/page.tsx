import React from 'react';

const SecretPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Welcome to the Secret Page</h1>

        <p className="text-lg text-gray-700 mb-4">
          <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong> Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          <strong>Donec dapibus. Nulla sit amet est id magna interdum dapibus.</strong> Vivamus a ante eu nisl tincidunt congue. Nulla sit amet est id magna interdum dapibus. Vivamus a ante eu nisl tincidunt congue. Nulla sit amet est id magna interdum dapibus. Vivamus a ante eu nisl tincidunt congue.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Vivamus a ante eu nisl tincidunt congue. Nulla sit amet est id magna interdum dapibus. Vivamus a ante eu nisl tincidunt congue. Nulla sit amet est id magna interdum dapibus.
        </p>

        <div className="mt-8 text-center">
          <a href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Go Back to Home Page
          </a>
        </div>
      </div>
    </div>
  );
}

export default SecretPage;
