import React, { useState } from 'react';

const CensusFormPersonas = () => {
  const [formData, setFormData] = useState({
    question1: '',
    additionalPeople: 1,
    housingType: '',
    phoneNumber: '',
    people: [
      {
        id: 1,
        firstName: '',
        lastName: '',
        sex: '',
        hispanicOrigin: '',
        hispanicOriginText: '',
        age: '',
        birthMonth: '',
        birthDay: '',
        birthYear: '',
      },
    ],
  });

  const handleChange = (e, personId) => {
    const { name, value } = e.target;

    if (name === 'question1' || name === 'additionalPeople' || name === 'housingType' || name === 'phoneNumber') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        people: prevData.people.map((person) =>
          person.id === personId ? { ...person, [name]: value } : person
        ),
      }));
    }
  };

  const handleSelectChange = (e) => {
    const value = parseInt(e.target.value, 10);

    setFormData((prevData) => ({
      ...prevData,
      additionalPeople: value,
      people: Array.from({ length: value }, (_, index) => ({
        id: index + 1,
        firstName: '',
        lastName: '',
        sex: '',
        hispanicOrigin: '',
        hispanicOriginText: '',
        age: '',
        birthMonth: '',
        birthDay: '',
        birthYear: '',
      })),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    window.location.href = '/instructivo';
    
  };

  return (
    <div className="flex items-center ">
      <div className="shadow-md rounded w-full">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2" onSubmit={handleSubmit}>
          
          <div className="-mx-3 mb-6">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Select the number of additional people:
            </label>
            <select
              id="additionalPeople"
              name="additionalPeople"
              className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 rounded"
              value={formData.additionalPeople}
              onChange={handleSelectChange}
            >
              {[1, 2, 3, 4, 5,6,7,8,9,10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {formData.people.map((person) => (

            <div key={person.id} className="mb-6 ">
                <div className=' bg-blue-400 p-1 m-10'>
              <p className="text-lg text-white font-semibold mb-2 text-center">Person {person.id}</p>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                    {`5. What is Person ${person.id}'s name? Print name below.`}
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={person.firstName}
                    onChange={(e) => handleChange(e, person.id)}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Last Name(s)</label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={person.lastName}
                    onChange={(e) => handleChange(e, person.id)}
                  />
                </div>
              </div>
                                  {/* Pregunta 6 - Género */}
                                  <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                {`6. What is Person ${person.id}'s sex?`}
                            </label>
                            <select
                                id="sex"
                                name="sex"
                                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 rounded"
                                value={person.sex}
                                onChange={(e) => handleChange(e, person.id)}
                            >
                                <option value="">Select ONE option</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>

                    {/* Pregunta 7 - Edad y Fecha de Nacimiento */}
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">{`7. What is Person ${person.id}'s age and what is Person ${person.id}'s date of birth? For babies less than 1 year old, do not write the age in months. Write 0 as the age.`}</label>
                            <div className="flex items-center mb-2">
                                <input
                                    className="appearance-none block w-1/4 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mr-2"
                                    type="number"
                                    placeholder="Age"
                                    name="age"
                                    value={person.age}
                                    onChange={(e) => handleChange(e, person.id)}
                                />
                                <span className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 mr-2"> years</span>
                            </div>
                            <div className="-mx-1 flex items-center">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 mr-2 ">Age on April 1, 2023</label>
                                <input
                                    className="appearance-none block w-1/4 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mr-2"
                                    type="number"
                                    placeholder="Month"
                                    name="birthMonth"
                                    value={person.birthMonth}
                                    onChange={(e) => handleChange(e, person.id)}
                                />
                                <input
                                    className="appearance-none block w-1/4 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mr-2"
                                    type="number"
                                    placeholder="Day"
                                    name="birthDay"
                                    value={person.birthDay}
                                    onChange={(e) => handleChange(e, person.id)}
                                />
                                <input
                                    className="appearance-none block w-1/4 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    type="number"
                                    placeholder="Year of birth"
                                    name="birthYear"
                                    value={person.birthYear}
                                    onChange={(e) => handleChange(e, person.id)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Pregunta 8 - Origen Hispano, Latino o Español */}
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                {`8. Is Person ${person.id} of Hispanic, Latino, or Spanish origin?`}
                            </label>
                            <select
                                id="hispanicOrigin"
                                name="hispanicOrigin"
                                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 rounded"
                                value={person.hispanicOrigin}
                                onChange={(e) => handleChange(e, person.id)}
                            >
                                <option value="">Select ONE option</option>
                                <option value="NotHispanic">No, not of Hispanic, Latino, or Spanish origin</option>
                                <option value="Mexican">Yes, Mexican, Mexican Am., Chicano</option>
                                <option value="PuertoRican">Yes, Puerto Rican</option>
                                <option value="Cuban">Yes, Cuban</option>
                                <option value="OtherHispanic">Yes, another Hispanic, Latino, or Spanish origin</option>
                            </select>
                            {person.hispanicOrigin === 'OtherHispanic' && (
                                <input
                                    type="text"
                                    id="hispanicOriginText"
                                    name="hispanicOriginText"
                                    placeholder="Specify other Hispanic origin"
                                    value={person.hispanicOriginText}
                                    onChange={(e) => handleChange(e, person.id)}
                                    className="mt-2 block appearance-none w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                />
                            )}
                        </div>
                    </div>
                
            </div>
          ))}

          
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CensusFormPersonas;
