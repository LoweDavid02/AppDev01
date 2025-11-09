import Profile from '../Profile/Profile';

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile 
        person={{
          name: 'Alan L. Hart',
          imageId: 'QIrZWGI'
        }}
      />
      <Profile 
        person={{
          name: 'Katherine Johnson',
          imageId: 'MK3eW3A'
        }}
      />
      <Profile 
        person={{
          name: 'Subrahmanyan Chandrasekhar',
          imageId: 'lrWQx8l'
        }}
      />
    </section>
  );
}