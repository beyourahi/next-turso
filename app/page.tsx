import { addMessage } from "actions/add-message";
import { getMessages } from "actions/get-messages";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";

export const runtime = "edge";

const Home = async () => {
    const messages = await getMessages();

    return (
        <div className="container flex max-w-2xl flex-1 flex-col items-start justify-center gap-12">
            <form action={addMessage} className="flex w-full flex-col justify-center gap-4">
                <Input type="text" name="message" placeholder="Enter Message" />
                <Button type="submit">Submit</Button>
            </form>

            <div>
                <ul className="flex flex-col gap-2">
                    {messages.map(message => (
                        <li key={message.id} className="items flex">
                            {message.message}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
