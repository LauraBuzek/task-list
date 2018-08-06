SQL data storage:

CREATE TABLE tasks (
	taskId int NOT NULL,
	taskGroup varchar(255) NOT NULL,
	task varchar(255) NOT NULL,
	dependencyIds varchar(255),
	completed boolean,
	completedAt timestamp,
	PRIMARY KEY (taskId)
)

CREATE TABLE taskGroups (
	taskGroup varchar(255),
	idList varchar(255)
)

*Not to be mistaken for dependencies, this is the list of ids that will be impacted
if the state of this item changes*
CREATE TABLE dependents {
	taskId int NOT NULL,
	dependentsList varchar(255)
}

Comments on SQL Storage:
	I ended up deciding on storage for dependents as well as dependencies in order to make it easier to track down items that depend on an element when a user goes to check/uncheck a task through the API. I'm not totally happy with this, but I feel that this is the type of thing that would be best decided by long form conversations about what the desired behavior around checking and unchecking items is.
	This is something I thought a lot about when implementing the frontend-only App, as the decision to allow or disallow unchecking of items where dependents have been marked complete has a high level of impact on users. My instinct would be to allow the user to check and uncheck freely, locking/unlocking the corresponding dependents without impacting their state as completed or incomplete. This means errant clicks won't destroy the state of a user's work.
	However, I can also see the use in being able to keep track of dependents, and thought about some infrastructure for that case.

Check/Uncheck HTTP API:

POST task-status/complete
Description: Marks a task as completed and returns unlocked dependencies, unless item with id is locked due to dependencies.
URL: https://api.buzek.todo/task-status/complete
Request params:
	taskId -> int (Required)
Example Response:
	Success:
		{
			"value": 200 OK
			"success": {
				"unlocked-tasks": <dependent tasks returned>
			}
		}
	Failure: 
		{
			"error": 428 Precondition Required
			"message": The requested task is unavailable for completion, as dependencies have not yet been completed.
		}


POST task-status/uncomplete
Description: Marks a task as incomplete, unless dependent tasks have already been completed
URL: https://api.buzek.todo/task-status/uncomplete
Request params:
	taskId -> int (Required)
Example Response:
	Success:
		{
			"value": 200 OK
			"success": true
		}
	Failure: 
		{
			"error": 428 Precondition Required
			"message": The requested task cannot be marked incomplete, as dependent tasks have already been completed.
		}

