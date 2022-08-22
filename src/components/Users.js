import React, { useEffect } from 'react'
import { fetchUsers } from '../redux/actionCreators/userActionCreators'
import { connect } from 'react-redux/es/exports';
import './styles/users.css'
function Users({ userData, fetchUsers }) {

    useEffect(() => {
        fetchUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const userList = userData.users.map(user =>
        <section className='user-grid'>
            <section className='user'>
                <section className='personal-data'>
                    <p className='id'>{user.id}</p>
                    <p className='username'>{user.username}</p>
                    <p className='name'>{user.name}</p>
                </section>
                <section className='address'>
                    <section className='street'>
                        <p className='street title'>Street</p>
                        <p className='street value'>{user.address.street}</p>
                    </section>
                    <section className='suite'>
                        <p className='suite title'>Suite</p>
                        <p className='suite value'>{user.address.suite}</p>
                    </section>
                    <section className='city'>
                        <p className='city title'>City</p>
                        <p className='city value'>{user.address.city}</p>
                    </section>
                    <section className='zipcode'>
                        <p className='zipcode title'>Zipcode</p>
                        <p className='zipcode value'>{user.address.zipcode}</p>
                    </section>
                    <section className='latitude'>
                        <p className='latitude title'>Latitude</p>
                        <p className='latitude value'>{user.address.geo.lat}</p>
                    </section>
                    <section>
                        <p className='longitude title'>Longitude</p>
                        <p className='longitude value'>{user.address.geo.lng}</p>
                    </section>
                </section>
                <section className='communication'>
                    <section className='phone'>
                        <p className='phone title'>Phone</p>
                        <p className='phone value'>{user.phone}</p>
                    </section>
                    <section className='website'>
                        <p className='website title'>Website</p>
                        <p className='website value'>{user.website}</p>
                    </section>
                    <section className='email'>
                        <p className='email title'>Email</p>
                        <p className='email value'>{user.email}</p>
                    </section>
                </section>
                <section className='company'>
                    <section className='company-name'>
                        <p className='company-name title'>Company Name</p>
                        <p className='company-name value'>{user.company.name}</p>
                    </section>
                    <section className='catch-phrase'>
                        <p className='catch-phrase title'>Catch Phrase</p>
                        <p className='catch-phrase value'>{user.company.catchPhrase}</p>
                    </section>
                    <section className='bs'>
                        <p className='bs title'>BS</p>
                        <p className='bs value'>{user.company.bs}</p>
                    </section>
                </section>
            </section>
        </section>
    )

    return (
        <div>
            <h1 className='page-title'>USERS</h1>
            <section >{userList}</section>
        </div>

  )
}


function mapStateToProps(state) {
    return {
        userData: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)