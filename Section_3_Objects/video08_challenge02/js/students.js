var students = [ 
  { 
   name: 'Dave',
    track: 'Front End Development',
    achievements: 158,
    points: 14730
  },
  {
    name: 'Jody',
    track: 'iOS Development with Swift',
    achievements: '175',
    points: '16375'
  },
  {
    name: 'Jordan',
    track: 'PHP Development',
    achievements: '55',
    points: '2025'
  },
  {
    name: 'John',
    track: 'Learn WordPress',
    achievements: '40',
    points: '1950'
  },
  {
    name: 'Trish',
    track: 'Rails Development',
    achievements: '5',
    points: '350'
  }
];

 var message = '';
 var student;

 function printMessage(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < students.length; i+=1) {
  student = students[i];
  message =  message + '<h2>Student: ' + student.name + '</h2>';
  message = message +  '<p>Track: '  + student.track + '</p>';
  message = message + '<p>Achievements: '  + student.achievements + '</p>';
  message = message + '<p>Points: '  + student.points + '</p>';
}
printMessage(message);

