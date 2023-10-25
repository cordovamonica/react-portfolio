import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGoodreads } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className='text-center fs-2 grid gap-3'>
      <a className="p-2 g-col-6 btn btn-outline-light btn-social mx-1 rounded-3" href="https://github.com/cordovamonica"><i><FaGithub /></i></a>
      <a className="p-2 g-col-6 btn btn-outline-light btn-social mx-1 rounded-3" href="https://www.linkedin.com/in/monica-cordova-525233298/"><i><FaLinkedin /></i></a>
      <a className="p-2 g-col-6 btn btn-outline-light btn-social mx-1 rounded-3" href="https://www.goodreads.com/user/show/170294001-monica"><i><FaGoodreads /></i></a>
      </div>
    </footer>
  );
}
