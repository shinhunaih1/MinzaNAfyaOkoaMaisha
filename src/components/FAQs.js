import React from "react";

const FAQs = () => {
  return (
    <section id="faq" className="container  mx-auto py-12 px-2">
      <h3 className="mb-14 text-teal-900 text-center text-3xl font-semibold underline decoration-green-600 lg:text-left xl:text-4xl">
        Frequently Asked Questions
      </h3>
      
      <div className="my-6">
        <div className="rounded-t-2xl bg-green-600 w-full cursor-pointer select-none border-2 border-green-500 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
          <h4 className="text-lg font-medium">
            What are non-communicable diseases (NCDs)?
          </h4>
        </div>
        <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-green-600 bg-teal-100/50 px-4 py-4 text-teal-800">
          <h5>
            Non-communicable diseases (NCDs) are chronic diseases that are not caused by infectious agents and are not transmissible from person to person. Common examples include cardiovascular diseases, cancers, chronic respiratory diseases, and diabetes. These conditions often result from a combination of genetic, environmental, and lifestyle factors.
          </h5>
        </div>
      </div>

      <div className="my-6">
        <div className="rounded-t-2xl bg-green-600 w-full cursor-pointer select-none border-2 border-green-500 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
          <h4 className="text-lg font-medium">
            What are the main risk factors for NCDs?
          </h4>
        </div>
        <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-green-600 bg-teal-100/50 px-4 py-4 text-teal-800">
          <h5>
            The primary risk factors for non-communicable diseases include unhealthy diets, physical inactivity, tobacco use, and excessive alcohol consumption. Additional factors such as genetic predisposition, poor air quality, and chronic stress can also contribute to the development of NCDs.
          </h5>
        </div>
      </div>

      <div className="my-6">
        <div className="rounded-t-2xl bg-green-600 w-full cursor-pointer select-none border-2 border-green-500 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
          <h4 className="text-lg font-medium">
            How can I prevent non-communicable diseases?
          </h4>
        </div>
        <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-green-600 bg-teal-100/50 px-4 py-4 text-teal-800">
          <h5>
            Preventing non-communicable diseases involves adopting a healthy lifestyle. This includes eating a balanced diet rich in fruits, vegetables, and whole grains, engaging in regular physical activity, avoiding tobacco, limiting alcohol consumption, and managing stress. Regular health screenings and vaccinations where applicable can also help in early detection and prevention.
          </h5>
        </div>
      </div>

      <div className="my-6">
        <div className="rounded-t-2xl bg-green-600 w-full cursor-pointer select-none border-2 border-green-500 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
          <h4 className="text-lg font-medium">
            What should I do if I suspect I have an NCD?
          </h4>
        </div>
        <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-green-600 bg-teal-100/50 px-4 py-4 text-teal-800">
          <h5>
            If you suspect you have a non-communicable disease, it is important to consult a healthcare professional for a thorough evaluation. They can provide a proper diagnosis, discuss treatment options, and recommend lifestyle changes to manage the condition. Early diagnosis and intervention can improve outcomes and quality of life.
          </h5>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
