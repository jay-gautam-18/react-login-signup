# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


const deletehandler = (id) => {
        const copyusers = [...users];
        const filteredusers = copyusers.filter((user) => user.id != id);
        setusers(filteredusers);
    };

    const userlist = users.map((user) => {
        return (
            <li
                key={user.id}
                className="flex items-center justify-between bg-gray-700 rounded p-2 font-thin mb-3"
            >
                <p>
                    <span className="block text-3xl mb-1">{user.name}</span>
                    <small className="text-lg">{user.email}</small>
                </p>
                <span
                    onClick={() => deletehandler(user.id)}
                    className="hover:cursor-pointer font-normal text-red-500"
                >
                    Delete
                </span>
            </li>
        );
    });


    const submithanlder = (data) => {
        const isPresent = users.find(
            (user) =>
                user.email === data.email && user.password === data.password
        );

        if (isPresent) {
            toast.success("User Already Exists!");
        } else {
            toast.error("User Not Found!");
        }
        reset();
    };