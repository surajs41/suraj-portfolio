
import { Code, Database, Layout, Server, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 text-primary mb-4" />,
      skills: ["Java", "JavaScript"],
    },
    {
      title: "Web Technologies ",
      icon: <Layout className="h-8 w-8 text-primary mb-4" />,
      skills: ["HTML5", "CSS3", "Bootstrap", "WordPress", "React.js", "APIIntegration & Automation."],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layout className="h-8 w-8 text-primary mb-4" />,
      skills: ["Spring Boot", "Hibernate"],
    },
    {
      title: "DevOps & CI/CD",
      icon: <Layout className="h-8 w-8 text-primary mb-4" />,
      skills: ["Docker", "Jenkins (working knowledge)", "Git", "GitHub", "GitLab."],
    },
    {
      title: "Databases",
      icon: <Database className="h-8 w-8 text-primary mb-4" />,
      skills: ["MySQL", "SQLite"],
    },
    {
      title: "Operating System",
      icon: <Server className="h-8 w-8 text-primary mb-4" />,
      skills: ["Windows", "Linux(Ubuntu)"],
    },
    {
      title: "Scripting",
      icon: <Settings className="h-8 w-8 text-primary mb-4" />,
      skills: ["Shell Scripting"],
    },
    {
      title: "IDE & Tools",
      icon: <Settings className="h-8 w-8 text-primary mb-4" />,
      skills: [ "Maven", "Tomcat", "VSCode", "Spring Tool Suite", "Eclipse", "Postman"],
    },
    {
      title: "Productivity & AI Tools",
      icon: <Settings className="h-8 w-8 text-primary mb-4" />,
      skills: ["Cursor.ai", "Lovable.ai", "Replit.ai", "GitHub Copilot"],
    },
  ];

  return (
    <section id="skills" className="py-10 md:py-16 bg-background relative">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto">My Skills</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10">
          As a computer engineering student and Java developer, I've developed expertise
          in various technologies and tools throughout my academic and project work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="animate-fade-in border border-border bg-card hover:shadow-md transition-all duration-300" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4 font-montserrat">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="section-divider mt-10"></div>
    </section>
  );
};

export default Skills;
