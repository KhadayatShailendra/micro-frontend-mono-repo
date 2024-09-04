# Micro front end using mono repo architecture
This micro front end application is mono workspace based. 

# Benefits of Using a Monorepo for Microfrontends
1. Centralized Management:
    * Unified Codebase: All microfrontend applications and shared libraries are in a single repository, making it easier to manage and coordinate changes.
    * Single Source of Truth: Consistency in dependency versions, build configurations, and tooling.

2. Simplified Development Workflow:
    * Atomic Changes: You can make changes across multiple microfrontends and libraries atomically, ensuring that everything is compatible and functioning together.
    * Integrated Tooling: Shared build scripts, testing configurations, and code quality tools are easily maintained and applied across the entire codebase.
3. Code Sharing and Reusability:
    * Shared Libraries: Common components, utilities, or services can be easily shared and reused across different microfrontends.
    * Consistent Standards: Enforce consistent coding standards and practices across all microfrontends.
4. Easier Refactoring:
    * Coordinated Refactoring: Refactor shared code and adjust dependencies across microfrontends without the need for cross-repository changes.
    * Unified Versioning: Manage versioning of shared libraries in a single place.
5. Improved Collaboration:
    * Cross-Functional Teams: Teams working on different microfrontends can collaborate more effectively when working within the same repository.
    * Integrated CI/CD: Set up continuous integration and deployment pipelines for the entire monorepo, streamlining deployment processes.

# Challenges of Using a Monorepo for Microfrontends

1. Scalability Concerns:
    * Large Repositories: As the number of microfrontends and shared libraries grows, the monorepo can become large and unwieldy, potentially impacting performance and developer productivity.
2. Build and Test Complexity:
    * Build Times: Building and testing the entire monorepo can be time-consuming. However, this can be mitigated with tools that support incremental builds and caching (e.g., Nx, Bazel).
    * Selective Builds: You need to configure your build tools to only build and test the affected parts of the monorepo, which requires careful setup.
3. Dependency Management:
    * Version Conflicts: Managing dependencies and their versions can become complex, especially if multiple microfrontends have different needs.
    * Monolithic Approach: There's a risk of the monorepo becoming a monolithic codebase if not properly managed, reducing some of the benefits of microfrontend architecture.
4. Tooling and Configuration:
    * Complex Configuration: Requires proper configuration and tooling to handle multiple projects, shared libraries, and dependencies effectively.
    * Tooling Overhead: You might need additional tools or frameworks (e.g., Nx) to manage and optimize the monorepo.

# Steps to create and configure the mono workspace front end applicaiton.
1. Create mono-workspace
    * ng new micro-frontend-mono-repo --no-create-application
2. Create host and user application inside workspace
    * ng g application host-app --routing --style=scss
    * ng g application user-app --routing --style=scss
3. Install webpack and webpack-cli
    * npm i webpack webpack-cli --save-dev
4. Add module-federation for host-app
    * ng add @angular-architects/module-federation --project host-app --port 4200
5. Add module-federation for user-app
    * ng add @angular-architects/module-federation --project user-app --port 4300 
