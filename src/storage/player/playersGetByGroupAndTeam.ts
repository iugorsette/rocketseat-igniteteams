import { playersGetByGroup } from "./playersGetByGroup";

export async function playersGetByGroupAndTeam(group: string, teams: string) {
  try {
    const storage = await playersGetByGroup(group);

    const players = storage.filter(player => player.team === teams);

    return players;
  } catch (error) {
    throw error;
  }
}