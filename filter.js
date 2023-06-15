// Complex Filtering
const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skills: [
            { name: 'javascript', yrsExperience: 1 },
            { name: 'html', yrsExperience: 5 },
            { name: 'css', yrsExperience: 3 },
        ]
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skills: [
            { name: 'javascript', yrsExperience: 0 },
            { name: 'html', yrsExperience: 4 },
            { name: 'css', yrsExperience: 2 },
        ]
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skills: [
            { name: 'javascript', yrsExperience: 1 },
            { name: 'html', yrsExperience: 1 },
            { name: 'css', yrsExperience: 5 },
        ]
    },
];

const skillSets = skill => skill.yrsExperience >= 5; // third

const innerFilter = student => student.skills.filter(skillSets).length > 0; // second

const filterStudents = students.filter(innerFilter); // first

const onlyNames = filterStudents.map(names => [`Name: ${names.name}, ID: ${names.id}`]);

console.log(onlyNames);