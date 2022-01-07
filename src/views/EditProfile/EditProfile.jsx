import { useUser } from '../../context/UserContext.jsx';
import { useProfile } from '../../context/ProfileContext.jsx';

export default function EditProfile() {
  const { user } = useUser();
  const { profile, setProfile } = useProfile();
  const legendText = !profile ? 'CREATE PROFILE' : 'EDIT PROFILE';

  const handleSubmit = () => {};

  return (
    <>
      <form onSubmit="handleSubmit">
        <fieldset>
          <legend>{legendText}</legend>
          <div>
            <label>
              Name
              <input
                value={profile ? profile.name : ''}
                onChange="handleChange"
                type="text"
              />
            </label>
          </div>
          <div>email: {user.email}</div>
          <div>
            <label>
              Birthday
              <input
                value={profile ? profile.birthday : ''}
                onChange="handleChange"
                type="date"
              />
            </label>
          </div>
          <div>
            <div>
              <label>Tell us a little about yourself</label>
            </div>
            <textarea
              value={profile ? profile.bio : ''}
              onChange="handleChange"
              rows="4"
            />
          </div>
          <button>SAVE</button>
        </fieldset>
      </form>
    </>
  );
}
//form to create profile form
//Name string
//email: string (disabled; not editable, but still visible in the form)
//birthday
