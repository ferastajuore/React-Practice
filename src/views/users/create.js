import React from 'react'

const Create = () => {
    return (
        <div>
            <h2>Create Users</h2>
            <form>
                <div>
                    <label form="username">UserName</label>
                    <input type="text" id="username" placeholder="Username"/>
                </div>
                <div>
                    <label form="email">Email</label>
                    <input type='email' id='email' placeholder='Email'/>
                </div>
                <div>
                    <label form="location">Location</label>
                    <input type='text' id='location' placeholder='Location'/>
                </div>
                <div>
                    <label form="phone">Phone</label>
                    <input type='text' id='phone' placeholder='Phone'/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}

export default Create;
