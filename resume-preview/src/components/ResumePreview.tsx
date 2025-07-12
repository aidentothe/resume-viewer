interface ResumePreviewProps {
  latexCode?: string
}

export default function ResumePreview({ latexCode }: ResumePreviewProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl print:shadow-none rounded-lg border border-slate-200">
      <div className="p-8 space-y-6">
        {/* Header */}
        <header className="text-center border-b border-slate-300 pb-4">
          <h1 className="text-4xl font-bold tracking-wide uppercase mb-2 text-slate-900">
            Aiden Huang
          </h1>
          <div className="text-sm text-slate-800 space-x-2">
            <span>aidentothe.com</span>
            <span className="text-slate-600">|</span>
            <span>aidenhuang.pro@gmail.com</span>
            <span className="text-slate-600">|</span>
            <span>github.com/aidentothe</span>
          </div>
        </header>

        {/* Education */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wide border-b border-slate-800 mb-3 text-slate-800">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900">Purdue University</h3>
                  <p className="italic text-sm text-slate-800">Bachelors of Science, Data Science</p>
                </div>
                <div className="text-right text-sm text-slate-800">
                  <p>May 2027</p>
                  <p className="italic">West Lafayette, IN</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900">Monta Vista High School</h3>
                  <p className="italic text-sm text-slate-800">High School Diploma</p>
                </div>
                <div className="text-right text-sm">
                  <p className="italic text-slate-800">Cupertino, CA</p>
                </div>
              </div>
              <ul className="list-disc list-inside ml-4 mt-2 text-sm space-y-1 text-slate-800">
                <li>NSA Codebreaker High Performer/ Stokes Finalist, USACO Plat, 4x AIME, FRC Robotics Lead</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wide border-b border-slate-800 mb-3 text-slate-800">
            Experience
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900">AI Intern</h3>
                  <p className="italic text-sm text-slate-800">AthenaHQ</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-slate-800">May 2025 -- August 2025</p>
                  <p className="italic text-slate-800">San Francisco, California (Remote)</p>
                </div>
              </div>
              <ul className="list-disc list-inside ml-4 mt-2 text-sm space-y-1 text-slate-800">
                <li>Integrated Google Analytics 4 for generative web analytics tracking, driving 5 new enterprise deals.</li>
                <li>Built input‐parsing token‐management systems to eliminate prompt duplication and boost accuracy.</li>
                <li>Optimized PostgreSQL via indexing & algorithmic development, reducing query latency 45%.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900">Software Engineering Intern</h3>
                  <p className="italic text-sm text-slate-800">NextSilicon</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-slate-800">June 2024 -- August 2024</p>
                  <p className="italic text-slate-800">Tel Aviv, Israel (Remote)</p>
                </div>
              </div>
              <ul className="list-disc list-inside ml-4 mt-2 text-sm space-y-1 text-slate-800">
                <li>Developed Maverick-2, focusing on optimizing software-defined hardware acceleration for HPC workloads</li>
                <li>Integrated support for models like OpenMP and Kokkos, enhancing accessibility and reducing code porting efforts</li>
                <li>Collaborated with other teams to profile and improve performance of HPC applications on the Maverick-2 platform</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900">HPC Intern</h3>
                  <p className="italic text-sm text-slate-800">ETH Zurich</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-slate-800">March 2023 -- May 2024</p>
                  <p className="italic text-slate-800">Remote</p>
                </div>
              </div>
              <ul className="list-disc list-inside ml-4 mt-2 text-sm space-y-1 text-slate-800">
                <li>Optimized PyTorch model training on multi-node SLURM clusters using Horovod, reducing epoch time by 40%</li>
                <li>Engineered data ingestion pipeline to process 50TB+ datasets using Dask and HDF5, achieving 6x throughput</li>
                <li>Built HPC–cloud workload manager using Terraform + Python CLI, enabling serverless access to on-prem compute</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900">Research Assistant</h3>
                  <p className="italic text-sm text-slate-800">University of California, Santa Cruz</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-slate-800">June 2022 -- August 2024</p>
                  <p className="italic text-slate-800">Santa Cruz, CA</p>
                </div>
              </div>
              <ul className="list-disc list-inside ml-4 mt-2 text-sm space-y-1 text-slate-800">
                <li>Authored NeurIPS 2024 paper on spiking neural networks for autonomous navigation in adversarial environments</li>
                <li>Boosted self-driving system performance by 35% in urban scenarios through biologically inspired rewards</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900">Artificial Intelligence Research Assistant</h3>
                  <p className="italic text-sm text-slate-800">Harvard University</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-slate-800">May 2023 -- December 2023</p>
                  <p className="italic text-slate-800">Remote</p>
                </div>
              </div>
              <ul className="list-disc list-inside ml-4 mt-2 text-sm space-y-1 text-slate-800">
                <li>Built LLM-based tool using OpenAI API + custom prompt engineering, speeding up research script generation</li>
                <li>Automated genomic data processing pipelines to model murine DNA structures across 500GB+ datasets</li>
                <li>Containerized workflow using Docker and deployed reproducible research environments on GCP</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wide border-b border-slate-800 mb-3 text-slate-800">
            Projects
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900">Library Compute Cluster</h3>
                  <p className="italic text-sm text-slate-800">Python, Kubernetes, Docker, Shell Scripting, SSH Tunneling</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-slate-800">February 2024 -- May 2024</p>
                </div>
              </div>
              <ul className="list-disc list-inside ml-4 mt-2 text-sm space-y-1 text-slate-800">
                <li>Created Kubernetes cluster across 20+ unused school library desktops, enabling private multi-node compute</li>
                <li>Executed over 1,000 hours of PyTorch training and fuzz testing for real-world ML and security experimentation</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900">Project Empower</h3>
                  <p className="italic text-sm text-slate-800">Python, Pandas, Scikit-learn, Flask, React</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-slate-800">June 2023 -- March 2025</p>
                </div>
              </div>
              <ul className="list-disc list-inside ml-4 mt-2 text-sm space-y-1 text-slate-800">
                <li>Conducted cold outreach for hackathon sponsorships, securing over $250,000 in rewards</li>
                <li>Ran 5 person marketing team, growing to 1mil+ page visits, 500k+ views on Instagram</li>
                <li>Created Illuminate and OpenGrant, both with over 20k active users</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wide border-b border-slate-800 mb-3 text-slate-800">
            Technical Skills
          </h2>
          <div className="text-sm space-y-1 text-slate-800">
            <div>
              <span className="font-bold text-slate-900">Languages:</span> Python, C++, Java, JavaScript, TypeScript, Scala, SQL (PostgreSQL)
            </div>
            <div>
              <span className="font-bold text-slate-900">Frameworks & Libraries:</span> React, Node.js, Flask, TensorFlow, PyTorch
            </div>
            <div>
              <span className="font-bold text-slate-900">Developer Tools & Platforms:</span> Git, Docker, Google Cloud Platform, SLURM
            </div>
            <div>
              <span className="font-bold text-slate-900">Cybersecurity & Pentesting:</span> Kali Linux, Nmap, Wireshark, Burp Suite, Ghidra
            </div>
            <div>
              <span className="font-bold text-slate-900">Hobbies:</span> Chess (2000 ELO), Poker, Cycling, Baseball, Thrifting
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}