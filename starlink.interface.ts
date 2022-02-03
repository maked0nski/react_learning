export interface StarlinkInterface {
    mission_name: string,
    launch_date_local: string,
    launch_site: {
        site_name_long: string
    },
    links: Links,
    rocket: {
        rocket_name: string,
        first_stage: First_stage,
        second_stage: Second_stage
    }
}

export interface Second_stage {
    payloads: [
        {
            payload_type: string,
            payload_mass_kg: number,
            payload_mass_lbs: number
        }
    ]
}

export interface First_stage {
    cores: [
        {
            flight: number,
            core: {
                reuse_count: number,
                status: string
            }
        }
    ]
}

export interface Links {
    article_link: null,
    video_link: string,
}


export interface IUser {
    name: string;
    age: number;
    gender: string;
}