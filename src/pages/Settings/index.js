import React, { useMemo } from "react";
import SettingsNav from "../../components/SettingsNav";
import { useAuth } from "../../hooks/useAuth";
import { createAvatar } from "@dicebear/core";
import { loreleiNeutral } from "@dicebear/collection";

const Settings = () => {
  const { user } = useAuth();

  const avatar = useMemo(() => {
    return createAvatar(loreleiNeutral, {
      size: 64,
      seed: user.displayName,
      backgroundColor: ["b6e3f4", "c0aede", "d1d4f9"],
      radius: 50

    }).toDataUri();
  }, []);

  return (
    <div className="settings-page">
      <SettingsNav />
      <section className="settings-body container pt-5">
        <div className="row pt-5">
          <div className="col-12 d-flex flex-row justify-content-center pt-5">
            <div className="profile-picture-container">
              <img src={user.profilePicture ? user.profilePicture : avatar} />
            </div>
          </div>
        </div>
        <div className='row pt-3'>
          <div className='col-6'>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
