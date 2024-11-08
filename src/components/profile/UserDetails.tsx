"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import { ModalContent, ModalHeader, ModalBody, ModalFooter, ModalProps, Textarea } from "@nextui-org/react";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { NumberTicker } from "@/components/ui/number-ticker";
import { UserTypes } from "@/types/user";
import { useModal } from "@/context/ModalContext";

const imageUrls = "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const imageUrl =
        "https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/computer-programming.jpg";

export default function UserDetails({user}: {user: UserTypes}) {

    const { openModal, closeModal } = useModal();

    const handleAddDescription = () => {
        const moadl: ModalProps = {
            children: (
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader>
                                <h2 className={"text-3xl font-bold"}>Add Description</h2>
                            </ModalHeader>
                            <ModalBody>
                                <p className={"text-lg text-gray-600"}>
                                    Add a description to your profile to let others know more about you.
                                </p>
                                <Textarea fullWidth={true} placeholder={"Add a description"} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color={"default"} variant={"faded"} onPress={closeModal}>Cancel</Button>
                                <Button color={"primary"}>Save</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            ),
            isDismissable: false,
            backdrop: "blur",
        };
        openModal(moadl);
    };

    return (
        <div className={"w-full h-auto min-h-80 border-b border-gray-600 flex items-center flex-col 2xl:flex-row"}>
            <div className={"h-80 w-auto  items-center justify-center border-r-[1px] border-b border-gray-600 hidden sm:flex"}>
                <div className={"w-auto h-60 flex items-center justify-center px-10 gap-5"}>
                    <div>
                        <DirectionAwareHover imageUrl={imageUrl}>
                            <p className={"font-bold text-xl"}>{user?.name}</p>
                            <p className={"font-normal text-sm"}>{user?.displayName}</p>
                        </DirectionAwareHover>
                    </div>
                    <div className={"w-full min-w-60 h-full flex flex-col items-start gap "}>
                        <div className={"h-full font-rubik  flex flex-col items-start justify-between"}>
                            <p className={"text-4xl "}>{user?.name}</p>
                            <p className={"text-2xl text-gray-500"}>{user?.displayName} {user?.gender && <span>. {user?.gender}</span>}</p>
                            <p className={"text-medium text-gray-800 dark:text-gray-400"}>
                                {user?.description || (
                                    <span className={"text-blue-500 font-bold hover:underline cursor-pointer"} onClick={handleAddDescription}>add Description</span>
                                )}

                            </p>
                            <Button  className={"tracking-wider border-2 border-gray-600"} color={"default"} variant={"faded"}>
                                Edit Profile
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-full h-auto flex flex-col items-center justify-center border-b border-gray-600 sm:hidden p-5 gap-2"}>
                <div className={"w-full h-auto flex items-center justify-start gap-3"}>
                    <div className={"w-16 h-16"}>
                        <Image src={imageUrls} alt={"profile"} width={100} height={100} className={"w-full h-full object-cover"} style={{
                            borderRadius: "50%"
                        }}/>
                    </div>
                    <div className={"w-auto h-auto grow flex gap-3 items-center justify-center font-rubik"}>
                        <div className={"flex flex-col items-center text-medium"}>   
                            {user?.posts ? <NumberTicker value={user?.posts} /> : <p>-</p>}
                            <p className={"text-neutral-500"}>Tweets</p>
                        </div>
                        <div className={"flex flex-col items-center text-medium"}>   
                            {user?.followers ? <NumberTicker value={user?.followers} /> : <p>-</p>}
                            <p className={"text-neutral-500"}>Followers</p>
                        </div>
                        <div className={"flex flex-col items-center text-medium"}>   
                            {user?.following ? <NumberTicker value={user?.following} /> : <p>-</p>}
                            <p className={"text-neutral-500"}>Following</p>
                        </div>
                    </div>
                </div>

                <div className={"w-full h-auto"}>
                    <div className={"h-full font-rubik flex flex-col items-start justify-between gap-1"}>
                            <p className={"text-xl "}>{user?.name}</p>
                            <p className={"text-sm text-gray-500"}>{user?.displayName} {user?.gender && <span>. {user?.gender}</span>}</p>
                            <p className={"text-medium text-gray-800 dark:text-gray-400"}>
                                {/* {user?.description || (
                                    <span className={"text-blue-500 font-bold hover:underline cursor-pointer"}>add Description</span>
                                )} */}
sdweior ewryuwer weu6r23 dsogiasef weu6rqwer dflijwerf asdfytqwerjkdf asduftwerj xdfyugqwse0rfjqwef asdfgyqwe9rfw f
sdweior ewryuwer weu6r23 dsogiasef weu6rqwer dflijwerf asdfytqwerjkdf asduftwerj xdfyugqwse0rfjqwef asdfgyqwe9rfw f
                            </p>
                            <div className={"w-full flex gap-1 items-center justify-between mt-3"}>
                                <Button  className={"tracking-wider border-2 border-gray-600"} color={"default"} variant={"faded"}>
                                    Edit Profile
                                </Button>
                                {/* <Button  className={"tracking-wider border-2 border-gray-600"} color={"default"} variant={"faded"}>
                                    Edit Profile
                                </Button>
                                <Button  className={"tracking-wider border-2 border-gray-600"} color={"default"} variant={"faded"}>
                                    Edit Profile
                                </Button> */}
                            </div>
                        </div>
                </div>
            </div>
            <div className={"w-full h-full  hidden sm:flex"}>
                <div className={"w-2/5 h-full flex items-center px-5 py-7 font-rubik border-r border-gray-600"}>
                    <div className={"w-full h-full flex flex-col items-center justify-evenly gap-y-5"}>
                        <div className={"w-full h-1/4 flex items-center justify-start gap-3 text-2xl"}>
                            <p className={"hover:underline hover:text-blue-500 cursor-pointer"}>Tweets:</p>
                            {user?.posts ? <NumberTicker value={user?.posts} /> : <p>-</p>}
                        </div>
                        <div className={"w-full h-1/4 flex items-center justify-start gap-3 text-2xl"}>
                            <p className={"hover:underline hover:text-blue-500 cursor-pointer"}> Followers: </p>
                            {user?.posts ? <NumberTicker value={user?.posts} /> : <p>-</p>}
                        </div>
                        <div className={"w-full h-1/4 flex items-center justify-start gap-3 text-2xl"}>
                            <p className={"hover:underline hover:text-blue-500 cursor-pointer"}>Following: </p>
                            {user?.posts ? <NumberTicker value={user?.posts} /> : <p>-</p>}
                        </div>
                        <div className={"w-full h-1/4 flex items-center justify-start gap-3 text-2xl"}>
                            <p className={"hover:underline hover:text-blue-500 cursor-pointer"}>Likes:</p>
                            {user?.posts ? <NumberTicker value={user?.posts} /> : <p>-</p>}
                        </div>
                    </div>
                </div>
                <div className={"w-3/5 h-full "}>
                    <div className={"w-full h-full px-3 flex flex-col"}>
                        <h2 className={"text-4xl font-fredoka py-4"}>Language.</h2>
                        <div className={"w-full h-full flex flex-wrap gap-1 justify-start"}>
                            {
                                user?.language.map((lang, index) => (
                                    <Image key={index} src={lang.url} alt={lang.title} width={40} height={40} className={"object-contain"} />
                                ))
                            }
                            {(user?.language.length === 0) && <div className={"w-full h-full flex items-center justify-center"}>
                                <p className={"text-2xl text-gray-500 mb-10"}>No Languages</p>
                            </div>}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
