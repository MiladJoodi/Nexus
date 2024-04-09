import Image from "next/image";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="container mx-auto py-3 mt-2 sm:py-4 lg:py-8 px-4 md:px-6 lg:px-16 xl:px-32">
      <div className="flex flex-col gap-8 justify-items-center items-center xl:p-32 p-2 lg:p-12 py-20 xl:py-52 lg:py-32 lg:rounded-[75px] rounded-[85px] text-center bg_contact">
        <div className="relative w-full flex flex-col gap-4 p-4 xl:p-8">
          <h4 className="lg:text-5xl text-3xl font-semibold">Get in touch</h4>
          <p className="text-gray-500">
            Stay connected with us, we will help you with your various needs. we
            will provide the best service in technical and consulting matters.
            You can provide your needs or something you ask in the form below
          </p>
          <Image
            src="/contact/img_group_767.svg"
            width={750}
            height={450}
            alt="Picture of the author"
            className="w-[100%] absolute left-0 top-0 object-contain"
          />
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
