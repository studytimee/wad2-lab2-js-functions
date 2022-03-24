fetch("https://randomuser.me/api/?results=10")
  .then((response) => response.json()) // Get response body stream
  .then((responseBody) => {
    const profiles = responseBody.results;
    console.log(profiles);

    // Objective: Calculate average age of profiles.
    // Old approach
    // const profilesAges = profiles.map(profile => profile.dob.age);
    // let ageAccumulator = 0;
    // for (let i = 0; i < profiles.length; i++) {
    //   ageAccumulator += profiles[i].dob.age;
    // }
    // console.log(`Average age =  ${Math.round(ageAccumulator/ profiles.length)}`);

    const ageAccumulator = profiles.reduce((total, profile, index, array) => {
      return total + profile.dob.age;
    }, 0);

    console.log(
      `Average age =  ${Math.round(ageAccumulator / profiles.length)}`
    );

    // // Objective: Find youngest profile..
    const youngest = profiles.reduce((min, profile) => {
      const newMin = profile.dob.age < min ? profile.dob.age : min;
      return newMin;
    }, 100);
    console.log(`Youngest = ${youngest}`);

    // // Objective: Compute no. of profiles in each age groups.
    const ageGroupsSetup = {
      "25-": 0,
      "26-50": 0,
      "51-75": 0,
      "76+": 0,
    };
    const ageCategories = Object.keys(ageGroupsSetup);

    const whichCategory = (age) => {
      if (age < 26) return ageCategories[0];
      else if (age < 51) return ageCategories[1];
      else if (age < 76) return ageCategories[2];
      else return ageCategories[3];
    };

    const profilesByAgeGroups = profiles.reduce((acc, profile) => {
      const key = whichCategory(profile.dob.age);
      acc[key] += 1;
      return acc;
    }, ageGroupsSetup);
    console.log(profilesByAgeGroups);
  })
  .catch(function (err) {
    console.log(err);
  });
