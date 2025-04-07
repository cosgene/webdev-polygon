import { useLoginState } from "../context/AuthContext";

const UserProfile = ({username}) => {
    const {logout} = useLoginState();

    return (
        <div>
            <span>{username}</span>
            <button onClick={logout} style={{marginLeft: 10}}>
                Log out
            </button>
        </div>
    );
}

export default UserProfile;