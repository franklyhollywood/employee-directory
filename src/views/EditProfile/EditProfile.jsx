export default function EditProfile(props) {
  const legendText = props.create ? 'CREATE PROFILE' : 'EDIT PROFILE';
  return (
    <>
      <form>
        <fieldset>
          <legend>{legendText}</legend>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>email</div>
          <div>
            <label>Birthday</label>
            <input type="date" />
          </div>
          <div>
            <div>
              <label>Tell us a little about yourself</label>
            </div>
            <textarea></textarea>
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
