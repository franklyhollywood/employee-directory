import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProfile } from '../../services/profiles.js';

export default function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfileInfo = async () => {
      const profileInfo = await getProfile();
      setProfile(profileInfo);
    };
    fetchProfileInfo();
  }, []);

  return (
    <>
      <h2>
        <b>name:</b> {profile.name}
      </h2>
      <p>
        <b>email:</b> {profile.email}
      </p>
      <p>
        <b>birthday:</b> {profile.birthday}
      </p>
      <p>
        <b>bio:</b> {profile.bio}
      </p>
      <button>
        <Link to="/editprofile">Edit Profile</Link>
      </button>
    </>
  );
}
