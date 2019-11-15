const data = [
    {
        name: 'Ushahemba Shir',
        age: '28',
        gender: 'male',
        lookingfor: 'female',
        location: 'Lagos',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    },
    {
        name: 'Orjir Chia',
        age: '49',
        gender: 'male',
        lookingfor: 'female',
        location: 'Gboko',
        image: 'https://randomuser.me/api/portraits/men/59.jpg'
    },
    {
        name: 'Ngunan Mbawuese',
        age: '26',
        gender: 'female',
        lookingfor: 'men',
        location: 'Abuja',
        image: 'https://randomuser.me/api/portraits/women/11.jpg'
    }
];

const profiles = profileIterator(data);
// Call next profile
nextProfile();
// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile(){
    const currentProfile = profiles.next().value;
    if (currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Preference: ${currentProfile.lookiingfor}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
        </ul>
        `;
        document.getElementById('imageDisplay').innerHTML = `
        <img src="${currentProfile.image}">
        `;
    } else {
        //No more profiles
        window.location.reload();
    }
 
}
// Profile Ileterator
function profileIterator (profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? { value: profiles [nextIndex++], done: false} : { done: true}
        }
    };
}