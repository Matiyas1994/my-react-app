import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Avatar from './components/Avatar';
import Info from './components/Info';

function App() {
  const userProfile= {
    name: 'Matiyas Yohannes',
    email: 'matiyasy1@gmail.com',
    imageUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
    bio: "This is me. no one else.",
    website:'https://a2sv.org/' 
  };

  return (
    <div className="app">
      <Card>
      <Avatar imageUrl={userProfile.imageUrl} altText={userProfile.name} />
        <Info
          name={userProfile.name}
          bio={userProfile.bio}
          email={userProfile.email}
          website={userProfile.website}
        />
      </Card>
    </div>
  );
}

export default App;
