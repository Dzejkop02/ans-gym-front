import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Profile.css';


const Profile = () => {
    const [userData, setUserData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        loggedIn: false,
        ticketName: null,
        ticketUntil: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/auth', {
                    credentials: 'include',
                });

                const data = await response.json();

                if (data.loggedIn) {
                    // Jeżeli użytkownik jest zalogowany, aktualizuj stan komponentu
                    setUserData(data);
                } else {
                    // W przeciwnym razie, przekieruj użytkownika na stronę logowania
                    window.location.href = '/'; // Załóżmy, że masz stronę logowania na "/login"
                }
            } catch (error) {
                console.error('Wystąpił błąd podczas pobierania danych użytkownika:', error);
            }
        };

        fetchData();
    }, []);

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:3001/auth/logout', {
                credentials: 'include',
            });

            const data = await response.json();

            if (data.success) {
                // Po udanym wylogowaniu przekieruj użytkownika na stronę główną
                window.location.href = '/';
            } else {
                console.error('Wystąpił błąd podczas wylogowywania:', data.error || 'Nieznany błąd.');
            }
        } catch (error) {
            console.error('Wystąpił błąd podczas wylogowywania:', error);
        }
    };

    const formatTicketUntil = () => {
        if (userData.ticketUntil) {
            const date = new Date(userData.ticketUntil);
            const formattedDate = date.toLocaleDateString('pl-PL');
            return formattedDate;
        } else {
            return 'Brak informacji';
        }
    };

    return(
        <div className="profil">
            <div className="profil-background">
            <div className="profil-left">
                <div className="profil-up">
                    <img className="user-img" src="zdj/user.png" alt="user"/>

                    <p>{userData.firstName + ' ' + userData.lastName}</p>
                    <p className="grey">{userData.email}</p>
                </div>
                <div className="profil-down">
                    <p>Wykupiony karnet: </p>
                    <p className="red">{userData.ticketName}</p>
                    <p>Okres ważności: </p>
                    <p className="red">{formatTicketUntil()}</p>
                </div>

                <Link to="/" id="przycisk" className="button" onClick={handleLogout}>Wyloguj</Link>
                
            </div>
        </div>
        </div>
    );
};

export default Profile;