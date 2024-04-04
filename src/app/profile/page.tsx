"use client"
import {useState, useEffect} from "react";
import Link from 'next/link';

export type User = {
    id?: number;
    username?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    role?: string;
    location?: UserLocation;
    bio?: string;
};

type UserLocation = {
    city: string;
    country: string;
}

export default function Profile () {
    const [user, setUser] = useState<User | null>(null); 
    const getUser = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/users/`, {method: 'GET'});
            if(response) {
                const result = await response.json();
                if(result) setUser(result);
            }
        } catch(e) {
            console.error('Error => ',e);
        }
    }

    useEffect(() => {
        getUser();
    }, [])
    
    
    return (
        <main>
            {user && 
                <>
                    <h2>{user?.first_name} {user?.last_name}</h2>
                    <h2>{user?.username}</h2>
                    <h2>{user?.email}</h2>
                    <h2>{user?.role}</h2>
                    <h2>{user?.location?.city}, {user?.location?.country}</h2>
                    <h2>{user?.bio}</h2>
                </>
            }
            <Link href="/" className="text-blue-500 mr-4"><h3>Go Back</h3></Link>
        </main>
    )
}