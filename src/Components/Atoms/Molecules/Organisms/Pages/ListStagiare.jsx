import React, { useEffect, useState } from 'react';

function ListStagiare() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7043/api/Trainee/GetListNonValid')
      .then((r) => r.json())
      .then((val) => setData(val))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://localhost:7043/api/Trainee/DeleteTrainee/${id}`, {
      method: 'DELETE',
    })
      .then(() => setData(data.filter(e => e.id !== id)))
      .catch((err) => console.error(err));

  };

  const handleValidate = (id, status) => {
    fetch(`https://localhost:7043/api/Trainee/ValidateTrainee`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, status }),
    })
      .then(() => {
        setData(data.map(e => e.id === id ? { ...e, RegistrationStatus: status } : e));
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="container mt-5 mx-auto p-6 bg-purple-100 border-2 border-purple-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4 text-purple-700">Liste des Stagiaires</h1>
      <ul className="space-y-4">
        {data && data.map((e) => (
          <li key={e.id} className="p-4 bg-purple-200 border border-purple-300 rounded-lg shadow-sm relative">
            <div>
              <p><span className="font-semibold text-purple-700">Nom:</span> {e.firstName}</p>
              <p><span className="font-semibold text-purple-700">ID:</span> {e.id}</p>
              <p><span className="font-semibold text-purple-700">Prénom:</span> {e.lastName}</p>
              <p><span className="font-semibold text-purple-700">Nationality:</span> {e.Nationality}</p>
              <p><span className="font-semibold text-purple-700">Birthdate:</span> {e.Birthdate}</p>
              <p><span className="font-semibold text-purple-700">Gender:</span> {e.Gender}</p>
              <p><span className="font-semibold text-purple-700">Birthplace:</span> {e.Birthplace}</p>
              <p><span className="font-semibold text-purple-700">City:</span> {e.City}</p>
              <p><span className="font-semibold text-purple-700">Address:</span> {e.Address}</p>
              <p><span className="font-semibold text-purple-700">PostalCode:</span> {e.PostalCode}</p>
              <p><span className="font-semibold text-purple-700">Email:</span> {e.Email}</p>
              <p><span className="font-semibold text-purple-700">GSM:</span> {e.GSM}</p>
              <p><span className="font-semibold text-purple-700">SchoolLevel:</span> {e.SchoolLevel}</p>
              <p><span className="font-semibold text-purple-700">Passerelle:</span> {e.Passerelle}</p>
              <p><span className="font-semibold text-purple-700">Status:</span> {e.Status}</p>
              <p><span className="font-semibold text-purple-700">MotherFirstName:</span> {e.MotherFirstName}</p>
              <p><span className="font-semibold text-purple-700">MotherLastName:</span> {e.MotherLastName}</p>
              <p><span className="font-semibold text-purple-700">MotherGSM:</span> {e.MotherGSM}</p>
              <p><span className="font-semibold text-purple-700">MotherEmail:</span> {e.MotherEmail}</p>
              <p><span className="font-semibold text-purple-700">FatherFirstName:</span> {e.FatherFirstName}</p>
              <p><span className="font-semibold text-purple-700">FatherLastName:</span> {e.FatherLastName}</p>
              <p><span className="font-semibold text-purple-700">FatherGSM:</span> {e.FatherGSM}</p>
              <p><span className="font-semibold text-purple-700">FatherEmail:</span> {e.FatherEmail}</p>
              <p><span className="font-semibold text-purple-700">ParentsAddress:</span> {e.ParentsAddress}</p>
              <p><span className="font-semibold text-purple-700">FatherJob:</span> {e.FatherJob}</p>
              <p><span className="font-semibold text-purple-700">Baccalaureate:</span> {e.Baccalaureate}</p>
              <p><span className="font-semibold text-purple-700">BacYear:</span> {e.BacYear}</p>
              <p><span className="font-semibold text-purple-700">HighSchoolName:</span> {e.HighSchoolName}</p>
              <p><span className="font-semibold text-purple-700">HighSchoolCity:</span> {e.HighSchoolCity}</p>
              <p><span className="font-semibold text-purple-700">HighSchoolCountry:</span> {e.HighSchoolCountry}</p>
              <p><span className="font-semibold text-purple-700">HighSchoolType:</span> {e.HighSchoolType}</p>
              <p><span className="font-semibold text-purple-700">UniversityDegreeType:</span> {e.UniversityDegreeType}</p>
              <p><span className="font-semibold text-purple-700">UniversityName:</span> {e.UniversityName}</p>
              <p><span className="font-semibold text-purple-700">UniversityType:</span> {e.UniversityType}</p>
              <p><span className="font-semibold text-purple-700">UniversityCity:</span> {e.UniversityCity}</p>
              <p><span className="font-semibold text-purple-700">UniversityCountry:</span> {e.UniversityCountry}</p>
              <p><span className="font-semibold text-purple-700">StudiesCompleted:</span> {e.StudiesCompleted}</p>
              <p><span className="font-semibold text-purple-700">NumberOfYearsOfStudy:</span> {e.NumberOfYearsOfStudy}</p>
              <p><span className="font-semibold text-purple-700">DiscoveryOriginOfTheSchool:</span> {e.DiscoveryOriginOfTheSchool}</p>
              <p><span className="font-semibold text-purple-700">BirthCertificates:</span> {e.BirthCertificates}</p>
              <p><span className="font-semibold text-purple-700">ScholarCertificates:</span> {e.ScholarCertificates}</p>
              <p><span className="font-semibold text-purple-700">Picture:</span> {e.Picture}</p>
              <p><span className="font-semibold text-purple-700">CIN:</span> {e.CIN}</p>
              <p><span className="font-semibold text-purple-700">RegistrationDate:</span> {e.RegistrationDate}</p>
              <p><span className="font-semibold text-purple-700">RegistrationStatus:</span> {e.RegistrationStatus}</p>
              <p><span className="font-semibold text-purple-700">IsWaitingList:</span> {e.IsWaitingList}</p>
              <p><span className="font-semibold text-purple-700">IdFiliere:</span> {e.IdFiliere}</p>
              <p><span className="font-semibold text-purple-700">IdGroup:</span> {e.IdGroup}</p>
              <p><span className="font-semibold text-purple-700">Group:</span> {e.Group}</p>
              <p><span className="font-semibold text-purple-700">Payments:</span> {e.Payments}</p>
              <p><span className="font-semibold text-purple-700">AnneeScolaire:</span> {e.AnneeScolaire}</p>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              {e.RegistrationStatus !== 'REFUSED' && (
                <>
                  <button 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    onClick={() => handleValidate(e.id, 'ACCEPTED')}
                  >
                    Accepted
                  </button>
                  <button 
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    onClick={() => handleValidate(e.id, 'REFUSED')}
                  >
                    Refused
                  </button>
                </>
              )}
                </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListStagiare;
