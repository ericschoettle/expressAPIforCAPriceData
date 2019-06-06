const lines = ["2", "1 3", "2 4", "4 5"];
let days = [];
let activities = [];
// Loop through lines and turn them into activities
for (let i = 1; i < lines.length; i++) {
  const times = lines[i].split(' ');
  let activity = {
    begin: parseInt(times[0]),
    end: parseInt(times[1]),
    assigned: false
  };
  activities.push(activity);
}

// While all activities don't have days, loop through assigning them. 
while (activities.some(activity=> activity.assigned === false)) {
  let day = [];
  // Loop through activites, assigning them to days. Note: activies must be in chronological order for this simple overlap test to work. 
  for (let i = 0; i < activities.length; i++) {
    // If unassigned, and either there are no activities for that day or the actvivity starts after the prior one on the same day ends, assign and push to day. 
    if (activities[i].assigned === false && (day.length === 0 || day[day.length - 1].end < activities[i].begin)) {
      activities[i].assigned = true;
      day.push(activities[i]);
    }
  }
  days.push(day);
}

console.log(days.length);

