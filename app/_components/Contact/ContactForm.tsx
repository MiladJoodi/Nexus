const ContactForm = () => {
  return (
    <div className="container mx-auto py-3 mt-12 sm:py-4">
      <div className="p-8 border  flex gap-6 justify-between ">
        {/* left */}
        <div className=" shadow-2xl bg-white rounded-2xl p-24 w-full flex flex-col gap-4">
                <h4 className="text-xl font-semibold text-gray-500">Send Message</h4>

                <div className="flex flex-col gap-4">
                    <div className="flex gap-8 w-full">
                        <input type="text" className="flex-1 p-6 bg-gray-200 rounded-md text-lg outline-none" placeholder="Your Name"/>
                        <input type="text" className="flex-1 shrink p-6 bg-gray-200 rounded-md text-lg outline-none" placeholder="Your Email"/>
                    </div>
                    <textarea className="p-4 bg-gray-200 rounded-md text-lg outline-none" name="" id="" cols={30} rows={10}></textarea>
                </div>

                <button className="flex self-start send_btn">Send</button>


        </div>

        {/* right */}
        <div className=" shadow-2xl bg-green-100 xl:py-16 px-8">
        <h4 className="text-xl font-semibold">Send Message</h4>
        <ul>
            <li>
                hello@mail.com
            </li>
            <li>
                hello@mail.com
            </li>
            <li>
            Sudirman street, holgan, melbourne
            </li>
            <li>
            1234 - 5678
            </li>
        </ul>

        <h4 className="text-xl font-semibold">Send Message</h4>

{/* social */}
<div className="flex gap-6">
instagram
</div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
