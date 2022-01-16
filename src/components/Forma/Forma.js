import React, {useState} from 'react';

const Form = ({filterArr}) => {

    const [formValue, setFormValue] = useState({name: '', username: '', email: ''});

    function formData(e) {
        const formData = {...formValue, [e.target.name]: e.target.value};
        setFormValue({...formValue, ...formData});

        filterArr(formData)
    }

    return (
        <div>
            <form>
                <label>Name: <input type="text" name={'name'} value={formValue.name} onChange={formData}/></label>
                <label>Username: <input type="text" name={'username'} value={formValue.username}
                                        onChange={formData}/></label>
                <label>Email: <input type="text" name={'email'} value={formValue.email} onChange={formData}/></label>
            </form>
        </div>
    );
};

export default Form;