import { useState } from 'react';
import { getRespondent, createRespondent } from '../api/form.api'



const Census = () => {
    const [formData, setFormData] = useState(
        {
        question1: '',
        additional_people: false,
        housing_type: '',
        phone_number: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'question1' || name === 'additional_people' || name === 'housing_type' || name === 'phone_number') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          console.log('Form Data1:', formData);
          const response = await createRespondent(formData);
          console.log('Response:', response.data);
          window.location.href = '/formp';

        } catch (error) {
          console.error('Error:', error.response?.data || error.message);
        }
      };

    return (
        <div>
            
        <div className="flex items-center justify-center h-screen bg-blue-400">
        <div className="bg-white shadow-md rounded w-full md:w-1/3 mx-4 my-10 px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4 text-center text-2xl font-bold text-blue-500 ">
      Census Form General Information
    </div>
    </div>
  <div className=" shadow-md rounded w-full md:w-2/3 lg:w-1/2 px-8 pt-6 pb-8 mb-4 flex flex-col my-2 ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2" onSubmit={handleSubmit}>
            {/* Pregunta 1 */}
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="question1">
                        1. How many people were living or staying in this house, apartment, or mobile home on April 1, 2023?
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="question1"
                        type="number"
                        placeholder="Number of people ="
                        name="question1"
                        value={formData.question1}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>

            {/* Pregunta 2 */}
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                        2. Were there any additional people staying here on April 1, 2020 that you did not include in Question 1?
                    </label>
                    <div>
                        <input
                            type="checkbox"
                            id="children"
                            name="additional_people"
                            value={true}
                            onChange={(e) => handleChange(e)}
                        />
                        <label htmlFor="children"> Children, related or unrelated, such as newborn babies, grandchildren, or foster children</label>
                    </div>
                    <div>
                        {/* Otras opciones de pregunta 2 */}
                    </div>
                </div>
            </div>

            {/* Pregunta 3 */}
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="housing_type">
                        3. Is this house, apartment, or mobile home
                    </label>
                    <select
                        id="housing_type"
                        name="housing_type"
                        className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 rounded"
                        value={formData.housing_type}
                        onChange={(e) => handleChange(e)}
                    >
                        {/* Opciones de pregunta 3 */}
                        <option value="">Select ONE option</option>
                        <option value="ownedWithMortgage">Owned by you or someone in this household with a mortgage or loan? Include home equity loans.</option>
                        <option value="ownedWithoutMortgage">Owned by you or someone in this household free and clear (without a mortgage or loan)?</option>
                        <option value="rented">Rented?</option>
                        <option value="occupiedWithoutRent">Occupied without payment of rent?</option>
                    </select>
                </div>
            </div>

            {/* Pregunta 4 */}
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="phone_number">
                        4. What is your telephone number?
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="phone_number"
                        type="tel"
                        placeholder="We will only contact you if needed for official Census Bureau business."
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>

            {/* Pregunta 5 */}
            
            {/* Botón de envío */}
            
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Submit
            </button>
           
        </form>
        </div>
        </div>
        </div>
    );
};

export default Census;
