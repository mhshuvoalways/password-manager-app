import React from "react";
import styles from "../style";

const PasswordTips = () => {
  return (
    <div
      className={`${styles.paragraph} w-full sm:w-10/12 m-auto py-10 bg-black-gradient-2 rounded-[20px] box-shadow mb-20 mt-5 sm:px-10 px-5`}
    >
      <p className={`text-3xl leading-normal ${styles.heading2}`}>Password tips</p>
      <div className="flex justify-between flex-wrap gap-10 mt-10">
        <div className="w-full sm:w-3/12">
          <p className="w-10 h-10 border rounded-full flex justify-center items-center mb-4">
            1
          </p>
          <p>Change your passwords periodically.</p>
        </div>
        <div className="w-full sm:w-3/12">
          <p className="w-10 h-10 border rounded-full flex justify-center items-center mb-4">
            2
          </p>
          <p>Never use the same password on multiple sensitive accounts.</p>
        </div>
        <div className="w-full sm:w-3/12">
          <p className="w-10 h-10 border rounded-full flex justify-center items-center mb-4">
            3
          </p>
          <p>
            Use a password with at least 16 characters. It should contain
            lowercase letters, uppercase letters, numbers, and symbols.
          </p>
        </div>
        <div className="w-full sm:w-3/12">
          <p className="w-10 h-10 border rounded-full flex justify-center items-center mb-4">
            4
          </p>
          <p>
            Refrain from saving your password in a web browser (Firefox, Chrome,
            Internet Explorer, Safari). Instead, use a tool which manages an
            encrypted password locker.
          </p>
        </div>
        <div className="w-full sm:w-3/12">
          <p className="w-10 h-10 border rounded-full flex justify-center items-center mb-4">
            5
          </p>
          <p>
            Do not log into sensitive accounts while connected to a public Wi-Fi
            hotspot.
          </p>
        </div>
        <div className="w-full sm:w-3/12">
          <p className="w-10 h-10 border rounded-full flex justify-center items-center mb-4">
            6
          </p>
          <p>
            Check that you are using a secure (HTTPS, SSH, SFTP) connection
            before transmitting your password over the web.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordTips;
