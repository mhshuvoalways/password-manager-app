import React from "react";
import styles from "../style";

const PasswordTips = () => {
  return (
    <div
      className={`${styles.paragraph} w-full sm:w-10/12 m-auto py-10 bg-black-gradient-2 rounded-[20px] box-shadow mb-20 mt-5 sm:px-10 px-5`}
    >
      <p className={`text-3xl leading-normal ${styles.heading2}`}>
        Password tips
      </p>
      <div className="flex justify-between flex-wrap gap-10 mt-10">
        <div className="w-full sm:w-3/12">
          <p className="w-10 h-10 border rounded-full flex justify-center items-center mb-4">
            1
          </p>
          <p>
            Aim for at least 12–16 characters to make the password harder to
            guess or crack.
          </p>
        </div>
        <div className="w-full sm:w-3/12">
          <p className="w-10 h-10 border rounded-full flex justify-center items-center mb-4">
            2
          </p>
          <p>
            Combine uppercase, lowercase letters, numbers, and special
            characters (!, @, #, etc.) for more security.
          </p>
        </div>
        <div className="w-full sm:w-3/12">
          <p className="w-10 h-10 border rounded-full flex justify-center items-center mb-4">
            3
          </p>
          <p>
            Don’t use obvious words, phrases, or patterns like "password123" or
            "abc123". Avoid using personal info like birthdates or names.
          </p>
        </div>
        <div className="w-full sm:w-3/12">
          <p className="w-10 h-10 border rounded-full flex justify-center items-center mb-4">
            4
          </p>
          <p>
            Create a memorable but unique phrase, such as
            "Green$Bird12!RunsFast" instead of single words.
          </p>
        </div>
        <div className="w-full sm:w-3/12">
          <p className="w-10 h-10 border rounded-full flex justify-center items-center mb-4">
            5
          </p>
          <p>
            Don’t use the same password across multiple websites or apps. Each
            one should have a unique password.
          </p>
        </div>
        <div className="w-full sm:w-3/12">
          <p className="w-10 h-10 border rounded-full flex justify-center items-center mb-4">
            6
          </p>
          <p>
            Change your passwords periodically and especially after any data
            breach or suspicious activity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordTips;
