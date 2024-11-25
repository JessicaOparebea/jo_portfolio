import React from 'react'

type InputProps = {
  label: string
  type?: string
  isTextArea?: boolean
}

const Input: React.FC<InputProps> = ({ label, type = 'text', isTextArea = false }) => (
  <div
    className={`flex flex-col ${isTextArea ? 'mt-12 w-full min-h-[168px]' : 'mt-12 w-full min-h-[76px]'} max-md:mt-10 max-md:max-w-full`}
  >
    <label className='text-xs uppercase text-[color(display-p3_0_0_0)] tracking-[2.2px]' htmlFor={label.toLowerCase().replace(' ', '-')}>
      {label}
    </label>
    {isTextArea ? (
      <textarea
        id={label.toLowerCase().replace(' ', '-')}
        className='flex-1 shrink gap-2.5 px-2 py-2.5 mt-1 text-xs rounded-xl border border-solid bg-[color(display-p3_1_1_1)] border-[color(display-p3_0.65_0.65_0.65)] size-full max-md:max-w-full'
        placeholder='Enter your message'
      />
    ) : (
      <input
        type={type}
        id={label.toLowerCase().replace(' ', '-')}
        className='flex-1 shrink gap-2.5 self-stretch p-2 mt-1 text-xs rounded-xl border border-solid bg-[color(display-p3_1_1_1)] border-[color(display-p3_0.65_0.65_0.65)] size-full max-md:max-w-full'
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
    )}
  </div>
)

export const ContactForm: React.FC = () => (
  <form className='flex overflow-hidden flex-col grow shrink self-stretch px-20 py-6 my-auto min-h-[698px] min-w-[240px] w-[669px] max-md:px-5 max-md:max-w-full'>
    <div className='flex flex-col md:flex-row md:gap-10 max-w-full w-full'>
      <Input label='Firstname' />
      <Input label='Lastname' />
    </div>
    <Input label='Email' type='email' />
    <Input label='Phone Number' type='tel' />
    <Input label='Message' isTextArea />
    <button
      type='submit'
      className='overflow-hidden gap-2.5 self-center px-2.5 py-6 mt-12 max-w-full text-base text-white whitespace-nowrap bg-[#0F32AA] hover:bg-[#0C2890] rounded-lg border min-h-[62px] w-[632px] max-md:mt-10'
    >
      Submit
    </button>
  </form>
)
