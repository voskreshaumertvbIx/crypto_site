import React from 'react';


const UserCentricSteps = () => {
  const steps = [
    { title: "Support", icon: "./img/step/support.png", description: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet." },
    { title: "Sales", icon: "./img/step/sales.png", description: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet." },
    { title: "Onboarding", icon: "./img/step/onboarding.png", description: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet." },
    { title: "Product", icon: "./img/step/product.png", description: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet." },
    { title: "Quality", icon: "./img/step/quality.png", description: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet." },
    { title: "Result", icon: "./img/step/result.png", description: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet." },
  ];

  return (
    <div className="text-center text-text_color py-10">
  <h1 className="text-font_h1 font-medium mb-2">Make every step user-centric</h1>
  <p className="text-font_large text-descp_text_color mb-10">Lorem ipsum dolor sit amet, consectetur adipis elit</p>
  <div className="grid grid-cols-3">
    {steps.map((step, index) => (
      <div
        key={index}
        className={`flex flex-col justify-center items-center p-6 text-left border-customPink ${index === steps.length - 1 || index === 2 ? 'border-r-0' : 'border-r'} ${index >= 3 && index <= 5 ? 'border-b-0' : 'border-b'}`}
      >
        <img className='w-[40px]' src={step.icon} alt="" />
        <h2 className="text-font_medium font-bold mb-2">{step.title}</h2>
        <p className="text-font_main_text text-descp_text_color text-center w-[80%]">{step.description}</p>
      </div>
    ))}
  </div>
</div>


  );
};

export default UserCentricSteps;
