import {useContext} from "react";
import {UserContext} from "../../src/contexts/UserContext.tsx";
import {UserProvider} from "../../src/context-providers/UserProvider.tsx";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function TestingComponent1() {
    const [user, setUser] = useContext(UserContext);

    function handleChange() {
        if (!setUser) {
            return
        }
        setUser({username: "Mao Xiongkai", password: "1145141919810"})
    }

    return (
        <>
            <button onClick={handleChange}>Change User</button>
            <h1>Current user is {user?.username}, with password {user?.password}</h1>
        </>
    )
}

function TestingComponent2() {
    const [user] = useContext(UserContext);
    return <h2>User is {user?.username}</h2>
}

describe('UserProvider', () => {
    it("should provide null as user's default value when first used", () => {
        render(<UserProvider><TestingComponent1/></UserProvider>)

        expect(screen.getByRole('heading', {level: 1}))
            .toHaveTextContent("Current user is , with password")
    })

    it('should update user context when modified', async () => {
        render(<UserProvider>
                <div>
                    <TestingComponent1/>
                    <TestingComponent2/>
                </div>
            </UserProvider>
        )

        const button = screen.getByRole('button')
        const user = userEvent.setup()
        await user.click(button)

        expect(screen.getByRole('heading', {level: 1}))
            .toHaveTextContent("Current user is Mao Xiongkai, with password 1145141919810")
        expect(screen.getByRole('heading', {level: 2}))
            .toHaveTextContent("User is Mao Xiongkai")
    })
})
