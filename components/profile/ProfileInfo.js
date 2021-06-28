import React from 'react';
import { useAuth } from '../../contexts/authContext';

export default function ProfileInfo() {
    const { user } = useAuth();

    return (
        <form className="profile-form">
            <div className="profileinfo">
                <div className="profile-img">
                    <div className="image-wrap">
                        <label htmlFor="">Photo</label>
                        <img src={(user && user.photoURL) ? user.photoURL : "/images/avatar.jpg"} alt="Profile Image" />
                    </div>
                </div>
                <div className="input-group">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="form-control" defaultValue={user ? user.displayName : 'User'} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="form-control" defaultValue={user ? user.email : ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="source">How did you learn about CACHY</label>
                        <select name="" id="source" className="form-control">
                            <option>Google</option>
                            <option>Facebook</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    )
}
