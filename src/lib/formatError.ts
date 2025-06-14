export const formatError = (error: string | null | undefined): string => {
	if (!error || typeof error !== 'string' || error.trim().length === 0) {
		return 'An unexpected error occurred. Please try again later.';
	}

	const trimmedError = error.trim();
	return trimmedError.charAt(0).toUpperCase() + trimmedError.slice(1);
};
