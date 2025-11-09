import Profile from './Profile/Profile';

export default function Gallery() {
  return (
    <section>
      <h2>Amazing scientists</h2>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Profile 
          person={{
            name: 'Alan L. Hart',
            imageId: 'QIrZWGI',
            profession: 'Physician',
            accomplishment: 'Pioneer in the use of X-ray technology'
          }}
          showDetails={true}
        />
        <Profile 
          person={{
            name: 'Katherine Johnson',
            imageId: 'MK3eW3A',
            profession: 'Mathematician',
            accomplishment: 'Space flight calculations'
          }}
          showDetails={true}
        />
        <Profile 
          person={{
            name: 'Subrahmanyan Chandrasekhar',
            imageId: 'lrWQx8l',
            profession: 'Astrophysicist',
            accomplishment: 'White dwarf star mass calculations'
          }}
          showDetails={true}
        />
      </div>
    </section>
  );
}
