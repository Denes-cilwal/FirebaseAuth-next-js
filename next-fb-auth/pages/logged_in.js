import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../src/context/AuthUserContext';

import {Container, Button} from 'reactstrap';

// creating protected Routes..
const LoggedIn = () => {
    const { authUser, loading, signOut } = useAuth();
    const router = useRouter();

    // Listen for changes on loading and authUser, redirect if needed
    useEffect(() => {
        if (!loading && !authUser)
            router.push('/')
    }, [authUser, loading])

    return (
        <Container>
            {
                loading ? <><div>Loading....</div></> : <>
                        <div>
                            <div>
                                { authUser && <div>Congratulations {authUser?.email}! You are logged in.</div> }
                            </div>
                        </div>
                        <div>
                            <div>
                                <Button onClick={signOut}>Sign out</Button>
                            </div>
                        </div>
                    </>
            }
        </Container>
    )
}

export default LoggedIn;
