import React, { useContext } from 'react';
import { Grid, GridCol, GridRow } from '@legalshield/adonis-ux-framework';
import ProfileContext from '../../contexts/profileContext';
import './profile.css';

const Profile: React.FC = () => {
  const profile = useContext(ProfileContext);

  const displayData = () => {
    const {
      version,
      firstName,
      middleName,
      lastName,
      emails,
      addresses,
      dateOfBirth,
      phoneNumbers,
      accountIdentifiers,
    } = profile;

    return (
      <Grid>
        <GridRow variant="plain">
          <GridCol>
            <p>Version: {version}</p>
            <p>First Name: {firstName}</p>
            <p>Middle Name: {middleName}</p>
            <p>Last Name: {lastName}</p>
            <div>
              {emails && emails.length > 0 && (
                <>
                  <p>Emails:</p>
                  <ul>
                    {emails.map((e, key) => (
                      <li key={key}>
                        Address: {e.address} - Verified: {e.verified.toString()} - Preferred: {e.preferred.toString()}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {addresses && addresses.length > 0 && (
                <>
                  <p>Addresses:</p>
                  <ul>
                    {addresses.map((a, key) => (
                      <li key={key}>
                        {a.address1} {a.address2} {a.locality}, {a.administrativeArea} {a.postalCode} {a.country}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <p>Date of Birth: {dateOfBirth}</p>
              {phoneNumbers && phoneNumbers.length > 0 && (
                <>
                  <p>Phone numbers:</p>
                  <ul>
                    {phoneNumbers.map((p, key) => (
                      <li key={key}>
                        Number: {p.number} - Verified: {p.verified.toString()} - Preferred: {p.preferred.toString()} -
                        Type: {p.type}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {accountIdentifiers && accountIdentifiers.length > 0 && (
                <>
                  <p>Account Identifiers:</p>
                  <ul>
                    {accountIdentifiers.map((a, key) => (
                      <li key={key}>
                        Id: {a.identifier} - Type: {a.type}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </GridCol>
        </GridRow>
      </Grid>
    );
  };

  return <div className="ProfileData">{profile && displayData()}</div>;
};

export default Profile;
