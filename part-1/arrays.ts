const skills: string[] = ["Dev", "DevOps", "Testing"];

for(const skill of skills) {
    console.log(skill);
}

skills
    .filter((skill: string) => skill !== "DevOps")
    .map(skill => skill + " Skill")
    .reduce((a, b) => a + b);