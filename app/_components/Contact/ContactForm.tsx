import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="container mx-auto py-3 mt-12 sm:py-4">
      <div className="xl:p-8 rounded-2xl flex flex-col lg:flex-row gap-6 justify-between ">
        {/* left */}
        <div className=" shadow-2xl bg-white  lg:p-24 p-4 pb-10 w-full flex flex-col gap-6">
                <h4 className="text-xl font-semibold text-gray-500">Send Message</h4>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 w-full">
                        <input type="text" className="flex-1 lg:p-6 p-4 bg-gray-200 rounded-md text-lg outline-none" placeholder="Your Name"/>
                        <input type="text" className="flex-1 lg:p-6 p-4  bg-gray-200 rounded-md text-lg outline-none" placeholder="Your Email"/>
                    </div>
                    <textarea className="p-4 bg-gray-200 rounded-md text-lg outline-none" name="" id="" cols={30} rows={10}></textarea>
                </div>

                <button className="flex justify-center items-center gap-2 self-start send_btn">
                    Send
                    <Image
                    src="/contact/send.svg"
                    width={18}
                    height={18}
                    alt=""
                    />
                    </button>


        </div>

        {/* right */}
        <div className="text-gray-500 flex flex-col lg:p-24 p-4 pb-10  gap-6 shadow-2xl bg-white rounded-2xl xl:py-24 px-16">
        <h4 className="text-xl font-semibold ">Send Message</h4>
        <ul className="flex flex-col gap-6">
            <li className="flex gap-2 items-center">
            <Image
                    src="/contact/email.svg"
                    width={24}
                    height={24}
                    alt=""
                    />
                hello@mail.com
            </li>
            <li className="flex gap-2 items-center">
            <Image
                    src="/contact/world.svg"
                    width={24}
                    height={24}
                    alt=""
                    />
                www.abc.com
            </li>
            <li className="flex gap-2 items-center">
            <Image
                    src="/contact/location.svg"
                    width={24}
                    height={24}
                    alt=""
                    />
            Sudirman street, holgan, melbourne
            </li>
            <li className="flex gap-2 items-center">
            <Image
                    src="/contact/tel.svg"
                    width={24}
                    height={24}
                    alt=""
                    />
            1234 - 5678
            </li>
        </ul>

        <h4 className="text-xl font-semibold ">Social Media</h4>
{/* social */}
<div className="flex gap-6">
<Image
                    src="/contact/social.png"
                    width={250}
                    height={55}
                    alt=""
                    />
</div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
