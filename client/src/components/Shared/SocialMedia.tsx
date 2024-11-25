import React from 'react'
import { faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

type SocialMediaProps = {
  color: string
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ color }) => (
  <div className='flex flex-row gap-10'>
    <div>
      <Link to='insta'>
        <FontAwesomeIcon icon={faInstagram} size='2xl' style={{ color }} />
      </Link>
    </div>
    <div>
      <Link to='twitter'>
        <FontAwesomeIcon icon={faXTwitter} size='2xl' style={{ color }} />
      </Link>
    </div>
    <div>
      <Link to='linkedin'>
        <FontAwesomeIcon icon={faLinkedin} size='2xl' style={{ color }} />
      </Link>
    </div>
  </div>
)
